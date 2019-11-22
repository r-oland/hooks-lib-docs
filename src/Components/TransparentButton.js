// Components==============
import { flexUnit } from "mixins";
import styled from "styled-components";
// =========================

export const TransparentButton = styled.div`
  color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.white} 2px solid;
  ${flexUnit(2, 17, 19, "vw", "font-size")}
  font-weight: 500;
  display: inline-block;
  padding: 0.6em 1.6em;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: ${({ theme }) => theme.black} 2px solid;
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    transition: all 0.2s ease-in-out;
  }
`;
