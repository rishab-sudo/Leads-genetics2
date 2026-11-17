import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Place once inside <BrowserRouter>, above <Routes>.
   - URL with #hash  -> smooth-scrolls to the element with that id
   - URL without it  -> scrolls to top on route change */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;

    // Retry briefly: the target page/section may not be mounted yet.
    const timer = setInterval(() => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(timer);
      } else if (++tries > 20) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;