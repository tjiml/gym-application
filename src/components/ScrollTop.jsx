import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior:"instant"});
  }, [pathname]);

  return null;
};

export default ScrollTop;