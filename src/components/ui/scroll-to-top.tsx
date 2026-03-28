import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on path change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
