const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:4173";
const BUILD_DIR = path.resolve(__dirname, "../build");

const staticRoutes = [
  "/",
  "/about",
  "/research-genomics",
  "/agri-genomics",
  "/moet",
  "/clinical-genomics",
  "/chip",
  "/contact",
  "/blog",
];

function sanitizeHtml(rawHtml, pageTitle, expectedDesc) {
  let html = rawHtml;

  // 1. Ensure exactly one clean <title> tag in <head>
  const titleToUse = pageTitle && pageTitle.trim() ? pageTitle.trim() : "LEADS Genetics";
  html = html.replace(/<title[\s\S]*?<\/title>/gi, "");
  html = html.replace(/<head([^>]*)>/i, `<head$1>\n    <title>${titleToUse.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</title>`);

  // 2. Ensure exactly one clean <meta name="description"> tag in <head>
  let bestDesc = expectedDesc || "";
  if (!bestDesc) {
    const descMatches = [...rawHtml.matchAll(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/gi)];
    for (let i = descMatches.length - 1; i >= 0; i--) {
      const val = descMatches[i][1];
      if (val && !val.includes("create-react-app") && !val.includes("Web site created")) {
        bestDesc = val;
        break;
      }
    }
  }

  if (bestDesc) {
    html = html.replace(/<meta[^>]*name=["']description["'][^>]*>/gi, "");
    html = html.replace(/(<\/title>)/i, `$1\n    <meta name="description" content="${bestDesc.replace(/"/g, '&quot;')}" />`);
  }

  return html;
}

async function prerender() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const discoveryPage = await browser.newPage();

    // STEP 1: Open blog listing and discover article URLs
    console.log("\nDiscovering blog articles...");

    await discoveryPage.goto(`${BASE_URL}/blog`, {
      waitUntil: "networkidle2",
      timeout: 120000,
    });

    await discoveryPage.waitForSelector(".blog-card", {
      timeout: 30000,
    });

    const blogRoutes = await discoveryPage.$$eval(
      '.blog-card a[href*="/blog/"]',
      (links) => [
        ...new Set(
          links
            .map((link) => new URL(link.href).pathname)
            .filter((pathname) => /^\/blog\/[^/]+\/?$/.test(pathname))
            .map((pathname) => pathname.replace(/\/$/, ""))
        ),
      ]
    );

    await discoveryPage.close();

    console.log("Blog articles found:", blogRoutes);

    // STEP 2: Combine static and dynamic routes
    const routes = [
      ...new Set([...staticRoutes, ...blogRoutes]),
    ];

    console.log("\nTotal routes:", routes.length);

    // STEP 3: Prerender every route with fresh page context
    for (const route of routes) {
      const url = `${BASE_URL}${route}`;

      console.log(`\nPrerendering: ${url}`);

      const page = await browser.newPage();

      const response = await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 120000,
      });

      if (!response || !response.ok()) {
        console.error(`Failed: ${route}`);
        await page.close();
        continue;
      }

      // Wait for React and Helmet
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const pageTitle = await page.title();
      let pageDesc = "";
      try {
        pageDesc = await page.$eval(
          'meta[name="description"]',
          (el) => el.getAttribute("content")
        );
      } catch (e) {
        // ignore if not found
      }

      const rawHtml = await page.content();
      await page.close();

      if (!rawHtml.includes('<div id="root"')) {
        console.error(`Root element missing: ${route}`);
        continue;
      }

      const sanitizedHtml = sanitizeHtml(rawHtml, pageTitle, pageDesc);

      const outputDir =
        route === "/"
          ? BUILD_DIR
          : path.join(
              BUILD_DIR,
              route.replace(/^\/+|\/+$/g, "")
            );

      fs.mkdirSync(outputDir, { recursive: true });

      const outputFile = path.join(outputDir, "index.html");

      fs.writeFileSync(outputFile, sanitizedHtml, "utf8");

      console.log(`Title: ${pageTitle}`);
      console.log(`Saved: ${outputFile}`);
    }

    console.log("\nAll pages prerendered successfully!");
  } finally {
    await browser.close();
  }
}

prerender().catch((error) => {
  console.error("Prerendering failed:", error);
  process.exit(1);
});
