// Components==============
import { flexUnit } from "mixins";
import styled from "styled-components";
// =========================

export const SquareButton = styled.div`
  background-color: ${({ theme: { primary } }) => primary};
  color: ${({ theme: { white } }) => white};
  ${flexUnit(2, 17, 19, "vw", "font-size")}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  display: inline-block;
  padding: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s5}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  cursor: pointer;

  &:hover { 
    transform: translateY(-3px);
    box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.35);
    transition: all 0.2s ease-in-out;
  }
`;
