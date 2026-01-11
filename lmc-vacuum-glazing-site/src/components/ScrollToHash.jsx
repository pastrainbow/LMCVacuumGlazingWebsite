import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  const targetIdRef = useRef(null);

  // Prevent browser scroll restoration / native hash jumping
  useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  // Scroll to hash when element exists, then clear hash immediately
  useLayoutEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    targetIdRef.current = id;

    let rafId = 0;
    let attempts = 0;
    const maxAttempts = 180; // ~3s

    const tryScroll = () => {
      // hash changed while retrying
      if (targetIdRef.current !== id) return;

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        // Clear hash immediately AFTER successful scroll
        navigate({ hash: "" }, { replace: true });

        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [hash, pathname, navigate]);

  return null;
}
