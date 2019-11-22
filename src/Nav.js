// Components==============
import MenuImp from "assets/Menu.inline.svg";
import { flexUnit } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import AddOns from "./Component-groups/AddOns";
import ButtonsDropdown from "./Component-groups/ButtonsDropdown";
import ButtonsNormal from "./Component-groups/ButtonsNormal";
import Cards from "./Component-groups/Cards";
import Collapse from "./Component-groups/Collapse";
import Dividers from "./Component-groups/Dividers";
import Raleway from "./Component-groups/FontsRaleway";
import Hamburger from "./Component-groups/Hamburger";
import MenuDropdown from "./Component-groups/MenuDropdown";
import Modals from "./Component-groups/Modals";
import Navigation from "./Component-groups/Navigation";

// =========================

const NavWrapper = styled.div`
  width: 350px;
  height: 100%;
  position: fixed;
  left: ${({ isFoldedOut }) => (isFoldedOut === true ? `0` : `-350px`)};
  top: 0;
  background-color: ${({ theme: { white } }) => white};
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
  ${flexUnit(2.5, 15, 16, "vw", "font-size")}
  padding-left: 2em;
  margin: 0 0 0.5em;
  cursor: pointer;
  color: #616161;
  color: ${({ category, selected }) =>
    category === selected ? `black` : `#616161`};
  font-weight: ${({ category, selected }) =>
    category === selected ? `600` : `400`};
`;

const M = styled.p`
  ${flexUnit(2.5, 16, 17, "vw", "font-size")}
  padding-left: 1em;
  margin: 1.5em 0 0.7em;
  cursor: pointer;
  color: ${({ category, selected }) =>
    category === selected ? `black` : `#616161`};
  font-weight: ${({ category, selected }) =>
    category === selected ? `600` : `400`};
`;

const L = styled.p`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")}
  font-weight: 600;
  margin: 0;
`;

const Collap = styled.div`
  max-height: ${({ category, selected }) =>
    category === selected ? `400px` : `0`};
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
          <Collap category={`Buttons`} selected={selected}>
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
          </Collap>
          <M
            onClick={event => {
              select(event.target.innerText);
            }}
            category={`Menus`}
            selected={selected}
          >
            Menus
          </M>
          <Collap category={`Menus`} selected={selected}>
            <S
              onClick={event => {
                changeCategory(<Navigation />);
                subSelect(event.target.innerText);
              }}
              category={`Navigation`}
              selected={subSelected}
            >
              Navigation
            </S>
            <S
              onClick={event => {
                changeCategory(<MenuDropdown />);
                subSelect(event.target.innerText);
              }}
              category={`Menu dropdown`}
              selected={subSelected}
            >
              Menu dropdown
            </S>
            <S
              onClick={event => {
                changeCategory(<Hamburger />);
                subSelect(event.target.innerText);
              }}
              category={`Hamburger`}
              selected={subSelected}
            >
              Hamburger
            </S>
          </Collap>
          <M
            onClick={event => {
              changeCategory(<Cards />);
              select(event.target.innerText);
              subSelect(event.target.innerText);
            }}
            category={`Cards`}
            selected={selected}
          >
            Cards
          </M>
          <Collap category={`Cards`} selected={selected}></Collap>
          <M
            onClick={event => {
              changeCategory(<Dividers />);
              select(event.target.innerText);
              subSelect(event.target.innerText);
            }}
            category={`Dividers`}
            selected={selected}
          >
            Dividers
          </M>
          <Collap category={`Dividers`} selected={selected}></Collap>
          <M
            onClick={event => {
              select(event.target.innerText);
            }}
            category={`Interactive`}
            selected={selected}
          >
            Interactive
          </M>
          <Collap category={`Interactive`} selected={selected}>
            <S
              onClick={event => {
                changeCategory(<Collapse />);
                subSelect(event.target.innerText);
              }}
              category={`Collapse`}
              selected={subSelected}
            >
              Collapse
            </S>
            <S
              onClick={event => {
                changeCategory(<AddOns />);
                subSelect(event.target.innerText);
              }}
              category={`Add ons`}
              selected={subSelected}
            >
              Add ons
            </S>
            <S
              onClick={event => {
                changeCategory(<Modals />);
                subSelect(event.target.innerText);
              }}
              category={`Modals`}
              selected={subSelected}
            >
              Modals
            </S>
          </Collap>
          <M
            onClick={event => {
              select(event.target.innerText);
            }}
            category={`Typography`}
            selected={selected}
          >
            Typography
          </M>
          <Collap category={`Typography`} selected={selected}>
            <S
              onClick={event => {
                changeCategory(<Raleway />);
                subSelect(event.target.innerText);
              }}
              category={`Raleway`}
              selected={subSelected}
            >
              Raleway
            </S>
          </Collap>
          <M
            onClick={event => {
              select(event.target.innerText);
            }}
            category={`Forms`}
            selected={selected}
          >
            Forms
          </M>
          <Collap category={`Forms`} selected={selected}></Collap>
          <Divider />
          <L>Libraries</L>
          <M
            onClick={event => {
              select(event.target.innerText);
              subSelect(event.target.innerText);
            }}
            category={`Carousel`}
            selected={selected}
          >
            Carousel
          </M>
          <M
            onClick={event => {
              select(event.target.innerText);
              subSelect(event.target.innerText);
            }}
            category={`Maps`}
            selected={selected}
          >
            Maps
          </M>
          <M
            onClick={event => {
              select(event.target.innerText);
              subSelect(event.target.innerText);
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
