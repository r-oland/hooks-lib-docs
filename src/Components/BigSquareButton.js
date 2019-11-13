// Components==============
import styled from "styled-components";
import { flexUnit } from "../style/Mixins";
// =========================

export const BigSquareButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  ${flexUnit(2, 17, 19, "vw", "font-size")}
  font-weight: 600;
  display: inline-block;
  padding: 1.2em 1.8em;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.35);
    transition: all 0.2s ease-in-out;
  }
`;
