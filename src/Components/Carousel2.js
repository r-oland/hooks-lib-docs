// Components==============
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
// =========================

const CarouselWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Slider1 = styled(Slider)``;

const Slider2 = styled(Slider)`
  padding-top: ${({ theme: { spacing } }) => spacing.s1};

  .slick-slide {
    padding: 0 ${({ theme: { spacing } }) => `${spacing.s1}`};
  }
`;

export default function Carousel2({ children }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const mediaQ = () => {
    const Query1 = window.matchMedia("(min-width: 450px)");
    const Query2 = window.matchMedia("(min-width: 700px)");

    if (Query1.matches && Query2.matches) {
      return 3;
    } else if (Query1.matches) {
      return 2;
    } else {
      return 1;
    }
  };

  const settingsNav1 = {};
  const settingsNav2 = {
    slidesToShow: mediaQ(),
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    arrows: false
  };

  return (
    <CarouselWrapper>
      <Slider1
        {...settingsNav1}
        asNavFor={nav2}
        ref={slider => setNav1(slider)}
      >
        {children}
      </Slider1>
      <Slider2
        asNavFor={nav1}
        ref={slider => setNav2(slider)}
        {...settingsNav2}
      >
        {children}
      </Slider2>
    </CarouselWrapper>
  );
}
