// Components==============
import MenuImp from "assets/Menu.inline.svg";
import React from "react";
import styled from "styled-components";
import TestButton from "./Components/TestButton";

// =========================

const NavWrapper = styled.div`
   width: 350px;
   height: 100%;
   position: fixed;
   left: ${({ isFoldedOut }) => (isFoldedOut === true ? `0` : `-350px`)};
   top: 0;
   background-color: ${({ theme }) => theme.white};
   overflow-x: hidden;
   overflow-y: scroll;
`;

const Menu = styled(MenuImp)`
   position: fixed;
   width: 45px;
   margin: 1em 0 0 275px;
   left: ${({ isfoledout }) => (isfoledout === "true" ? `0` : `-275px`)};
   transform: ${({ isfoledout }) =>
      isfoledout === "true" ? `rotate(270deg)` : `rotate(90deg)`};
   transition: 1s;
   z-index: 1;
   cursor: pointer;
`;

export default function Nav({
   category,
   setCategory,
   isFoldedOut,
   setIsFoldedOut
}) {
   const fold = () =>
      isFoldedOut === true ? setIsFoldedOut(false) : setIsFoldedOut(true);

   const changeCategory = c => setCategory(c);

   return (
      <div>
         <NavWrapper isFoldedOut={isFoldedOut}>
            <p
               onClick={() => {
                  changeCategory(<TestButton />);
               }}
            >
               testButton
            </p>
         </NavWrapper>
         <Menu onClick={fold} isfoledout={JSON.stringify(isFoldedOut)} />
      </div>
   );
}
