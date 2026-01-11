import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    if (typeof window === "undefined") return;

    const id = decodeURIComponent(hash.slice(1));

    let raf = 0;
    let tries = 0;
    const maxTries = 180; // ~3s at 60fps

    const attemptScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      tries += 1;
      if (tries < maxTries) raf = requestAnimationFrame(attemptScroll);
    };

    raf = requestAnimationFrame(attemptScroll);
    return () => cancelAnimationFrame(raf);
  }, [hash, pathname]);

  return null;
}
