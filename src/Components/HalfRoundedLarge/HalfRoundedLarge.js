// Components==============
import styled from "styled-components";
import HalfRoundedLargeImp from "./HalfRoundedLarge.inline.svg";
// =========================

export const HalfRoundedLarge = styled(HalfRoundedLargeImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
