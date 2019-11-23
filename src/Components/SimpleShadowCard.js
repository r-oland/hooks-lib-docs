// Components==============
import styled from "styled-components";
// =========================

export const SimpleShadowCard = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;
