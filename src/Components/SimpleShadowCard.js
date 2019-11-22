// Components==============
import styled from "styled-components";
// =========================

export const SimpleShadowCard = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.2);
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;
