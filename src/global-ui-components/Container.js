// Componenets==============
import styled from "styled-components";
// =========================

export const Container = styled.div`
   margin: 0 auto;
   max-width: 90%;

   @media screen and (min-width: 768px) {
      margin: 0 auto;
      max-width: 85%;
   }

   @media screen and (min-width: 1200px) {
      margin: 0 auto;
      max-width: 80%;
   }
`;

export const NavContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
