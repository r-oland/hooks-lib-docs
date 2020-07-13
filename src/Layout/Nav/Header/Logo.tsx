// Components==============
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
// =========================

const Svg = styled.svg`
  width: 40px;
  opacity: 0;

  @media screen and (min-width: 1000px) {
    opacity: 1;
  }
`;

export default function Logo() {
  const theme = useContext(ThemeContext);

  return (
    <Svg viewBox="0 0 525 525">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.033"
          y1="0.273"
          x2="1.091"
          y2="0.788"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0.12" stopColor="rgba(255, 140, 0, 1)" />
          <stop offset="0.96" stopColor="rgba(255, 207, 63, 1)" />
        </linearGradient>
      </defs>
      <g id="Components" transform="translate(262.5 262.5)">
        <g
          id="Group_1"
          data-name="Group 1"
          transform="translate(-262.5 -262.5)"
        >
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="262.5"
            cy="262.5"
            r="262.5"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_1"
            data-name="Path 1"
            d="M117,226c24.9,14.1,76.5,39.3,103,50,24.7,10,50,9.6,74,0,27.4-11,81.8-34.6,107-50s23.5-35.7-4-50c-25.2-13.1-76.6-37.6-103-48a101,101,0,0,0-75,0c-26.4,10.4-76.9,36.7-102,50S88.1,209.5,117,226Z"
            fill={theme.color.offWhite}
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M117,286c24.9,14.1,76.5,39.3,103,50,24.7,10,50,9.6,74,0,27.4-11,81.8-34.6,107-50s23.5-35.7-4-50c-25.2-13.1-76.6-37.6-103-48a101,101,0,0,0-75,0c-26.4,10.4-76.9,36.7-102,50S88.1,269.5,117,286Z"
            fill={theme.color.offWhite}
            opacity="0.80"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M117,346c24.9,14.1,76.5,39.3,103,50,24.7,10,50,9.6,74,0,27.4-11,81.8-34.6,107-50s23.5-35.7-4-50c-25.2-13.1-76.6-37.6-103-48a101,101,0,0,0-75,0c-26.4,10.4-76.9,36.7-102,50S88.1,329.5,117,346Z"
            fill={theme.color.offWhite}
            opacity="0.60"
          />
        </g>
      </g>
    </Svg>
  );
}
