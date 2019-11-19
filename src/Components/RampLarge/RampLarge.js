// Components==============
import styled from "styled-components";
import RampLargeImp from "./RampLarge.inline.svg";
// =========================

export const RampLarge = styled(RampLargeImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
