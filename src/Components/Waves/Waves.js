// Components==============
import styled from "styled-components";
import WavesImp from "./Waves.inline.svg";
// =========================

export const Waves = styled(WavesImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;
  /* set height for flexible SVG */
  /* set position absolute to this element and position relative + zIndex to previous/next element for smooth overlap */
`;
