// Components==============
import { M } from "mixins";
import styled from "styled-components";
// =========================

export const SimpleButton = styled(M)`
  background-color: ${({ theme: { primary } }) => primary.s4};
  color: ${({ theme: { white } }) => white};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  display: inline-block;
  padding: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s5}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { primary } }) => primary.s5};
    box-shadow: ${({ theme: { doubleShadow } }) => doubleShadow.small};
    transition: all 0.2s ease-in-out;
  }
`;
