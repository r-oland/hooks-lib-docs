// Components==============
import styled from "styled-components";
import HalfRoundedSmallImp from "./HalfRoundedSmall.inline.svg";
// =========================

export const HalfRoundedSmall = styled(HalfRoundedSmallImp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
