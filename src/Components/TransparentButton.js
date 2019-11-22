// Components==============
import { M } from "mixins";
import styled from "styled-components";
// =========================

export const TransparentButton = styled(M)`
  color: ${({ theme: { white } }) => white};
  border: ${({ theme: { white } }) => white} 2px solid;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  display: inline-block;
  padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s6}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  cursor: pointer;

  &:hover {
    border: ${({ theme: { black } }) => black} 2px solid;
    background-color: ${({ theme: { black } }) => black};
    color: ${({ theme: { white } }) => white};
    transition: all 0.2s ease-in-out;
  }
`;
