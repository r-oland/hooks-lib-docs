// Components==============
import React from "react";
import styled from "styled-components";
import headshot from "../../assets/headshot.jpg";
import { UnderlineButton } from "../UnderlineButton";
// =========================

const Wrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme: { spacing } }) => spacing[10]};

  h4 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
    ${({ theme: { fontSize } }) => fontSize.m}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const Bar = styled.div`
  height: 1.2px;
  width: 200px;
  background: black;
  opacity: 0.1;
  margin: 0 auto ${({ theme: { spacing } }) => spacing[2]};
`;

const Circle = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 150px;
  margin: 0 auto ${({ theme: { spacing } }) => spacing[2]};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  margin: ${({ theme: { spacing } }) => spacing[2]} auto 0;
`;

export default function Image() {
  return (
    <Wrapper>
      <Bar />
      <h4>This package is written by</h4>
      <Circle>
        <img src={headshot} alt="Roland Branten" />
      </Circle>
      <h2>Roland Branten</h2>
      <a
        href="https://rolandbranten.nl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UnderlineButton>rolandbranten.nl</UnderlineButton>
      </a>
      <Flex>
        <a
          href="https://github.com/r-oland/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1133 1.09706e-06C5.86816 -0.00292859 0 5.86231 0 13.1016C0 18.8262 3.6709 23.6924 8.7832 25.4795C9.47168 25.6523 9.36621 25.1631 9.36621 24.8291V22.5586C5.39063 23.0244 5.22949 20.3936 4.96289 19.9541C4.42383 19.0342 3.14941 18.7998 3.53027 18.3604C4.43555 17.8945 5.3584 18.4775 6.42773 20.0566C7.20117 21.2021 8.70996 21.0088 9.47461 20.8184C9.6416 20.1299 9.99902 19.5146 10.4912 19.0371C6.37207 18.2988 4.65527 15.7852 4.65527 12.7969C4.65527 11.3467 5.13281 10.0137 6.07031 8.93848C5.47266 7.16602 6.12598 5.64844 6.21387 5.42285C7.91602 5.27051 9.68555 6.6416 9.82324 6.75C10.79 6.48926 11.8945 6.35156 13.1309 6.35156C14.373 6.35156 15.4805 6.49512 16.4561 6.75879C16.7871 6.50684 18.4277 5.3291 20.0098 5.47266C20.0947 5.69824 20.7334 7.18067 20.1709 8.92969C21.1201 10.0078 21.6035 11.3525 21.6035 12.8057C21.6035 15.7998 19.875 18.3164 15.7441 19.043C16.098 19.3909 16.3789 19.8059 16.5705 20.2636C16.7622 20.7214 16.8607 21.2127 16.8604 21.709V25.0049C16.8838 25.2686 16.8604 25.5293 17.2998 25.5293C22.4883 23.7803 26.2236 18.8789 26.2236 13.1045C26.2236 5.86231 20.3525 1.09706e-06 13.1133 1.09706e-06V1.09706e-06Z"
              fill="#1A1A1A"
            />
          </svg>
        </a>
        <a href="mailto:info@rolandbranten.nl">
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22 5.3125L13.825 10.425C13.0125 10.9375 11.9875 10.9375 11.175 10.425L3 5.3125C2.87466 5.24214 2.7649 5.14708 2.67736 5.03307C2.58982 4.91906 2.52633 4.78847 2.49072 4.64921C2.45511 4.50995 2.44813 4.36492 2.4702 4.22288C2.49226 4.08085 2.54292 3.94477 2.6191 3.82288C2.69528 3.70099 2.79541 3.59582 2.91341 3.51374C3.03141 3.43167 3.16484 3.37439 3.30562 3.34537C3.4464 3.31636 3.5916 3.31621 3.73244 3.34493C3.87328 3.37366 4.00683 3.43067 4.125 3.5125L12.5 8.75L20.875 3.5125C20.9932 3.43067 21.1267 3.37366 21.2676 3.34493C21.4084 3.31621 21.5536 3.31636 21.6944 3.34537C21.8352 3.37439 21.9686 3.43167 22.0866 3.51374C22.2046 3.59582 22.3047 3.70099 22.3809 3.82288C22.4571 3.94477 22.5077 4.08085 22.5298 4.22288C22.5519 4.36492 22.5449 4.50995 22.5093 4.64921C22.4737 4.78847 22.4102 4.91906 22.3226 5.03307C22.2351 5.14708 22.1253 5.24214 22 5.3125V5.3125Z"
              fill="#1A1A1A"
            />
          </svg>
        </a>
      </Flex>
    </Wrapper>
  );
}
