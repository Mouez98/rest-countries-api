import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

import Button from "../ui/Button";

const ScrollToTop = () => {
  const [scroll, setScrollY] = useState(null);
  const setScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToTopHandler = () => window.scrollTo(0, 0);

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, []);

  return (
    <>
      {scroll > 150 && (
        <Button onClick={scrollToTopHandler}>
          <BiArrowToTop />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
