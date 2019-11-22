// Components==============
import styled from "styled-components";
import Ramp2Imp from "./Ramp2.inline.svg";
// =========================

export const Ramp2 = styled(Ramp2Imp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;
  /* set height for flexible SVG */
  /* set position absolute to this element and position relative + zIndex to previous/next element for smooth overlap */

  #changeColor {
    fill: ${({ theme: { primary} }) => primary.s4};
  }
`;
