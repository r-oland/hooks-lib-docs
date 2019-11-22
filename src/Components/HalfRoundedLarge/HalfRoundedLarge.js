// Components==============
import styled from "styled-components";
import HalfRoundedLargeImp from "./HalfRoundedLarge.inline.svg";
// =========================

export const HalfRoundedLarge = styled(HalfRoundedLargeImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;
  /* set height for flexible SVG */
  /* set position absolute to this element and position relative + zIndex to previous/next element for smooth overlap */

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
