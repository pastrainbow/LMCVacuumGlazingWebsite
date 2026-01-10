import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // tells us when we removed the hash on purpose
  const clearingHashRef = useRef(false);

  useEffect(() => {
    // If there's no hash:
    if (!hash) {
      // If we JUST cleared the hash ourselves, do nothing (don't scroll to top)
      if (clearingHashRef.current) {
        clearingHashRef.current = false;
        return;
      }

      // Otherwise, normal behavior for route changes (optional)
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }


    requestAnimationFrame(() => {
      const id = hash.slice(1);
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        // Clear the hash so clicking the same hash link again works
        clearingHashRef.current = true;

        // IMPORTANT: remove only the hash, don't change pathname
        navigate(pathname, { replace: true });
      }
    });
  }, [pathname, hash, navigate]);

  return null;
}
