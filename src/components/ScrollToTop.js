import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;

    // Target page route change ke baad mount hota hai, isliye ~1 second retry
    const timer = setInterval(() => {
      const element = document.getElementById(id);
      tries += 1;

      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
        clearInterval(timer);
      } else if (tries > 20) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
