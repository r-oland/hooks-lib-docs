// Components==============
import styled from "styled-components";
import Ramp2Imp from "./Ramp2.inline.svg";
// =========================

export const Ramp2 = styled(Ramp2Imp)`
  position: relative;
  left: -1.25vw;
  width: 102.5vw;

  #changeColor {
    fill: ${({ theme }) => theme.primary};
  }
`;
