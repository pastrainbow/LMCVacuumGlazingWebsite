import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // wait for the page to render (important when navigating from other routes)
    requestAnimationFrame(() => {
      const id = hash.replace("#", "");
      const el =  document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [pathname, hash]);

  return null;
}