// Components==============
import styled from "styled-components";
// =========================

export const SimpleShadowCard = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  max-width: ${({ theme: { spacing } }) => spacing.s14};
  height: ${({ theme: { spacing } }) => spacing.s14};
  margin: 0 auto;
`;
