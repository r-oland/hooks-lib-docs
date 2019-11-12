// Components==============
import styled from "styled-components";
import { flexUnit } from "../style/Mixins";
// =========================

export const RoundedButton = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  ${flexUnit(2, 17, 19, "vw", "font-size")}
  font-weight: 600;
  display: inline-block;
  padding: 0.6em 1.6em;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.35);
    transition: all 0.2s ease-in-out;
  }
`;
