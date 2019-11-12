// Components==============
import styled from "styled-components";
// =========================

export const IconButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  width: calc(60px + 0.75vw);
  height: calc(60px + 0.75vw);
  margin: 0 auto;

  &:hover {
    box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.35);
    transition: all 0.2s ease-in-out;
  }
`;
