// Components==============
import MenuImp from "assets/Menu.inline.svg";
import React, { useState } from "react";
import styled from "styled-components";
import ButtonsDropdown from "./Component-groups/ButtonsDropdown";
import ButtonsNormal from "./Component-groups/ButtonsNormal";
import MenuHamburger from "./Component-groups/MenuHamburger";
import { flexUnit } from "./style/Mixins";

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

const TextWrapper = styled.div`
   padding: 7.5vh 15% 0;
`;

const S = styled.p`
   ${flexUnit(2, 14, 15, "vw", "font-size")}
   padding-left: 2em;
   margin: 0 0 0.3em;
   cursor: pointer;
   color: #616161;
   color: ${({ category, selected }) =>
      category === selected ? `black` : `#616161`};
   font-weight: ${({ category, selected }) =>
      category === selected ? `600` : `400`};
`;

const M = styled.p`
   ${flexUnit(2, 16, 17, "vw", "font-size")}
   padding-left: 1em;
   margin: 1.55em 0 0.5em;
   cursor: pointer;
   color: ${({ category, selected }) =>
      category === selected ? `black` : `#616161`};
   font-weight: ${({ category, selected }) =>
      category === selected ? `600` : `400`};
`;

const L = styled.p`
   ${flexUnit(2, 18, 19, "vw", "font-size")}
   font-weight: 600;
   margin: 0;
`;

const Collapse = styled.div`
   max-height: ${({ category, selected }) =>
      category === selected ? `20vh` : `0`};
   transition: 0.5s;
   overflow: hidden;
`;

const Divider = styled.div`
   margin: 2em 0 2.25em;
`;

export default function Nav({
   category,
   setCategory,
   isFoldedOut,
   setIsFoldedOut
}) {
   // State

   const [selected, setSelected] = useState(`none`);
   const [subSelected, setSubSelected] = useState(`none`);
   console.log(selected);

   // State functions

   const fold = () =>
      isFoldedOut === true ? setIsFoldedOut(false) : setIsFoldedOut(true);

   const changeCategory = c => setCategory(c);

   const select = category => {
      setSelected(category);
   };

   const subSelect = category => {
      const Query = window.matchMedia("(min-width: 650px)");

      if (Query.matches) {
         setSubSelected(category);
      } else {
         setSubSelected(category);
         setIsFoldedOut(false);
      }
   };

   return (
      <div>
         <NavWrapper isFoldedOut={isFoldedOut}>
            <TextWrapper>
               <L>Components</L>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Buttons`}
                  selected={selected}
               >
                  Buttons
               </M>
               <Collapse category={`Buttons`} selected={selected}>
                  <S
                     onClick={event => {
                        changeCategory(<ButtonsNormal />);
                        subSelect(event.target.innerText);
                     }}
                     category={`Normal`}
                     selected={subSelected}
                  >
                     Normal
                  </S>
                  <S
                     onClick={event => {
                        changeCategory(<ButtonsDropdown />);
                        subSelect(event.target.innerText);
                     }}
                     category={`Dropdown`}
                     selected={subSelected}
                  >
                     Dropdown
                  </S>
               </Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Menus`}
                  selected={selected}
               >
                  Menus
               </M>
               <Collapse category={`Menus`} selected={selected}>
                  <S
                     onClick={event => {
                        changeCategory(<MenuHamburger />);
                        subSelect(event.target.innerText);
                     }}
                     category={`Hamburger`}
                     selected={subSelected}
                  >
                     Hamburger
                  </S>
               </Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Cards`}
                  selected={selected}
               >
                  Cards
               </M>
               <Collapse category={`Cards`} selected={selected}></Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Dividers`}
                  selected={selected}
               >
                  Dividers
               </M>
               <Collapse category={`Dividers`} selected={selected}></Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Interactive`}
                  selected={selected}
               >
                  Interactive
               </M>
               <Collapse
                  category={`Interactive`}
                  selected={selected}
               ></Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Forums`}
                  selected={selected}
               >
                  Forums
               </M>
               <Collapse category={`Forums`} selected={selected}></Collapse>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Others`}
                  selected={selected}
               >
                  Others
               </M>
               <Collapse category={`Others`} selected={selected}></Collapse>
               <Divider />
               <L>Utilities</L>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Carousel`}
                  selected={selected}
               >
                  Carousel
               </M>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Maps`}
                  selected={selected}
               >
                  Maps
               </M>
               <M
                  onClick={event => {
                     select(event.target.innerText);
                  }}
                  category={`Typed`}
                  selected={selected}
               >
                  Typed
               </M>
            </TextWrapper>
         </NavWrapper>
         <Menu onClick={fold} isfoledout={JSON.stringify(isFoldedOut)} />
      </div>
   );
}
