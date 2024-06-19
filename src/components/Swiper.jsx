import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const CoverFlowSwiper = ({ children }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="">
      <div className="swiper-wrapper">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="swiper-slide">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverFlowSwiper;
