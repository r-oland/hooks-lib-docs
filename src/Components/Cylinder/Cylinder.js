// Components==============
import styled from "styled-components";
import CylinderImp from "./Cylinder.inline.svg";
// =========================

export const Cylinder = styled(CylinderImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;
  /* set height for flexible SVG */
  /* set position absolute to this element and position relative + zIndex to previous/next element for smooth overlap */

  #changeColor {
    fill: ${({ theme: { primary } }) => primary.s4};
  }
`;
