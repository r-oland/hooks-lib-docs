// Components==============
import styled from "styled-components";
import RampSmallImp from "./RampSmall.inline.svg";
// =========================

export const RampSmall = styled(RampSmallImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
