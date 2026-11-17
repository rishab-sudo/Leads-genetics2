const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../build');
const BASE_HTML = path.join(BUILD_DIR, 'index.html');

const pageMeta = {
  'index.html': {
    title: 'LEADS Genetics | Advancing Genomics & Genetic Research',
    description: 'LEADS Genetics advances genomics through agricultural, research and clinical genomics solutions, combining advanced sequencing, bioinformatics and genetic research.'
  },
  'about/index.html': {
    title: 'About LEADS Genetics | Our Mission & Expertise',
    description: 'Learn about LEADS Genetics, our mission, history, scientific expertise and work across agricultural, research and clinical genomics.'
  },
  'research-genomics/index.html': {
    title: 'Research Genomics Services | Sequencing & Bioinformatics | LEADS Genetics',
    description: 'Explore LEADS Genetics research genomics services, including advanced DNA and RNA sequencing, multi-omics analysis, bioinformatics, sample processing and genomic data interpretation.'
  },
  'agri-genomics/index.html': {
    title: 'Agricultural & Livestock Genomics | LEADS Genetics',
    description: 'Explore agricultural genomics and livestock genetics at LEADS Genetics, including cattle breeding, reproductive biotechnology, animal IVF, nutrition and livestock care.'
  },
  'moet/index.html': {
    title: 'MOET Technology in Cattle | LEADS Genetics',
    description: 'Explore Multiple Ovulation and Embryo Transfer (MOET), cattle breeding, embryo transfer and reproductive biotechnology solutions at LEADS Genetics.'
  },
  'clinical-genomics/index.html': {
    title: 'Clinical Genomics & Genetic Testing | LEADS Genetics',
    description: 'Explore clinical genomics at LEADS Genetics, including next-generation sequencing, oncology genomics, rare disease genomics and advanced genomic analysis.'
  },
  'chip/index.html': {
    title: 'Zebu Cattle SNP Chip | Indigenous Cattle Genomics | LEADS Genetics',
    description: 'Discover India\'s first indigenous Zebu Cattle SNP Chip by LEADS Genetics, designed for Bos indicus cattle to support genomic evaluation, genetic diversity analysis and improved breeding decisions.'
  },
  'contact/index.html': {
    title: 'Contact LEADS Genetics | Get in Touch',
    description: 'Contact LEADS Genetics to learn more about agricultural genomics, clinical genomics, research services, livestock genetics and genomic technologies.'
  },
  'blog/index.html': {
    title: 'Genomics Research & Insights | LEADS Genetics Blog',
    description: 'Read articles and research insights from LEADS Genetics on whole genome sequencing, agricultural genomics, cattle breeding, clinical genomics and genomic technologies.'
  },
  'blog/whole-genome-sequencing-2026/index.html': {
    title: 'Whole Genome Sequencing in 2026: New Frontiers in Research | LEADS Genetics',
    description: 'Discover how whole genome sequencing helps researchers explore genetic variation, identify genomic changes and investigate biological questions across human genetics, agriculture, livestock and microbiology.'
  },
  'blog/genomic-selection-cattle-breeding/index.html': {
    title: 'Genomic Selection in Cattle: Potential Applications in Modern Breeding Programs | LEADS Genetics',
    description: 'Explore how genomic selection can help breeders estimate genetic merit earlier and support more informed cattle breeding decisions, including work with indigenous zebu breeds.'
  }
};

if (!fs.existsSync(BASE_HTML)) {
  console.error('build/index.html not found. Run npm run build first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(BASE_HTML, 'utf8');
let hasError = false;

console.log('\n--- Processing and Verifying Single Title & Description for Every Page ---');

for (const [relPath, meta] of Object.entries(pageMeta)) {
  const fullPath = path.join(BUILD_DIR, relPath);
  const dirPath = path.dirname(fullPath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  let html = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : baseTemplate;

  // 1. Remove all existing <title> tags
  html = html.replace(/<title[\s\S]*?<\/title>/gi, '');

  // 2. Remove all existing <meta name="description"> tags
  html = html.replace(/<meta[^>]*name=["']description["'][^>]*>/gi, '');

  // 3. Inject exactly one clean <title> and <meta name="description">
  const cleanTitle = meta.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cleanDesc = meta.description.replace(/"/g, '&quot;');
  const metaTags = `    <title>${cleanTitle}</title>\n    <meta name="description" content="${cleanDesc}" />`;

  html = html.replace(/(<head[^>]*>)/i, `$1\n${metaTags}`);

  fs.writeFileSync(fullPath, html, 'utf8');

  // 4. Verify exactly 1 title and 1 description
  const titleMatches = html.match(/<title[\s\S]*?<\/title>/gi) || [];
  const descMatches = html.match(/<meta[^>]*name=["']description["'][^>]*>/gi) || [];

  if (titleMatches.length !== 1 || descMatches.length !== 1) {
    console.error(`[FAIL] ${relPath} -> Titles: ${titleMatches.length}, Descriptions: ${descMatches.length}`);
    hasError = true;
  } else {
    console.log(`[PASS] ${relPath.padEnd(52)} | Title: "${meta.title.substring(0, 35)}..."`);
  }
}

if (hasError) {
  console.error('\nSEO verification failed: One or more pages have multiple or missing title/description tags.');
  process.exit(1);
} else {
  console.log('\nAll pages verified successfully with exactly 1 unique title and 1 meta description!\n');
}
