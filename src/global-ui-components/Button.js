import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { flexUnit } from "../style/Mixins";

export const Button = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 9em;
   height: 3em;
   border-radius: 100px;
   padding: 0.8em 1em;
   cursor: pointer;
   font-weight: bold;
   ${flexUnit(2, 16, 18, "vw", "font-size")}

   &:hover {
      /*  */
   }

   /* variations */
   ${({ type }) =>
      type === "" &&
      css`
         &:hover {
            /*  */
         }
      `}
`;
