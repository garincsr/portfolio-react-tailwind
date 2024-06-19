import React, { useState } from "react";
import ArrowUp from "../assets/images/arrowUp.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 xl:bottom-10 xl:right-10 shadow-inherit rounded-full transition-opacity ease-in-out duration-500 animate-bounce ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <img
        className="w-[3rem] xl:w-[4rem]"
        src={ArrowUp}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        alt="ScrollToTop"
      />
    </button>
  );
};

export default ScrollButton;
