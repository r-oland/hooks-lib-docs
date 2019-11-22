// Components==============
import styled from "styled-components";
// =========================

export const IconButton = styled.div`
  background-color: ${({ theme: { primary } }) => primary.s4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  width: calc(40px + 0.75vw);
  height: calc(40px + 0.75vw);
  margin: 0 auto;

  &:hover {
    box-shadow: ${({ theme: { shadow } }) => shadow.medium};
    transition: all 0.2s ease-in-out;
  }
`;
