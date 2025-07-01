import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Define the routes that should scroll to top
  const scrollRoutes = ["/", "/about", "/services", "/contact"];

  useEffect(() => {
    if (scrollRoutes.includes(pathname)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // change to "auto" if you want instant scroll
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
