// Components==============
import styled from "styled-components";
import Waves2Imp from "./Waves2.inline.svg";
// =========================

export const Waves2 = styled(Waves2Imp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;
  /* set height for flexible SVG */
  /* set position absolute to this element and position relative + zIndex to previous/next element for smooth overlap */
`;
