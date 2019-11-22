// Components==============
import { flexUnit } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import MenuDropdownArrowImp from "./MenuDropdownArrow.inline.svg";
// =========================

const Wrapper = styled.div`
  margin-left: calc(2em + 1vw);
  font-weight: 500;
  ${flexUnit(1.5, 17, 18, "vw", "font-size")}
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  align-items: center;
  padding: 20px;
`;

const Item = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  color: ${({ theme, cardIsVisible }) =>
    cardIsVisible === true ? theme.primary : theme.gray};
  transition: 0.2s;
`;

const MenuDropdownArrowSvg = styled(MenuDropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  width: 10px;
  margin-left: 9.5em;

  .svgColor {
    fill: ${({ theme, cardIsVisible }) =>
      cardIsVisible === true ? theme.primary : theme.gray};
  }
`;

const Card = styled.div`
  max-height: ${({ cardIsVisible }) =>
    cardIsVisible === true ? `1500%` : "0px"};
  visibility: ${({ cardIsVisible }) =>
    cardIsVisible === true ? `visible` : "hidden"};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 8px rgba(112, 112, 112, 0.15);
  border-radius: 10px;
  position: absolute;
  top: 60px;
  transition: 0.5s ease-in-out;
  width: 80vw;
  z-index: 100;
  text-align: left;

  @media screen and (min-width: 600px) {
    width: 175%;
    left: -37.5%;
  }

  .dropdownItem {
    display: grid;
    grid-template-columns: 0.25fr 1fr;
    grid-template-rows: 2;
    align-items: center;

    border-bottom: rgba(112, 112, 112, 0.15) 2px solid;
    margin: 0;
    padding: 1.25em 1.75em;
    transition: 0.6s;
    opacity: ${({ cardIsVisible }) => (cardIsVisible === true ? `1` : "0")};

    &:hover {
      transform: translateX(7.5px);
    }
  }

  img {
    grid-column: 1;
    grid-row: 1/3;
    width: 35px;
    height: 35px;
  }

  p {
    color: ${({ theme }) => theme.primary};
    margin: 0 0 0.4em;
    ${flexUnit(1.5, 17.5, 18.5, "vw", "font-size")}
    grid-column: 2/3;
    grid-row: 1;
  }

  .subDropdownText {
    color: ${({ theme }) => theme.gray};
    font-weight: 400;
    grid-column: 2/3;
    grid-row: 2;
  }
`;

export default function MenuCardDropdown3({ children, name }) {
  const [cardIsVisible, setCardIsVisible] = useState(false);

  const handleChange = () => {
    const Query = window.matchMedia("(min-width: 800px)");

    if (cardIsVisible === false && Query.matches) {
      setCardIsVisible(true);
    } else if (cardIsVisible === true && Query.matches) {
      setCardIsVisible(false);
    }
  };

  const handleClickChange = () => {
    const Query = window.matchMedia("(max-width: 800px)");

    if (cardIsVisible === false) {
      setCardIsVisible(true);
    } else if (cardIsVisible === true && Query.matches) {
      setCardIsVisible(false);
    }
  };

  return (
    <Wrapper onMouseEnter={handleChange} onMouseLeave={handleChange}>
      <Grid onClick={handleClickChange}>
        <Item cardIsVisible={cardIsVisible}>{name}</Item>
        <MenuDropdownArrowSvg cardIsVisible={cardIsVisible} />
      </Grid>
      <Card cardIsVisible={cardIsVisible}>{children}</Card>
    </Wrapper>
  );
}

/* <MenuCardDropdown3 name="Dropdown item 2">
<div className="dropdownItem">
  <SVG/>
  <p>Title 1</p>
  <div className="subDropdownText">Additional text</div>
</div>
<div className="dropdownItem">
  <SVG/>
  <p>Title 2</p>
  <div className="subDropdownText">Additional text</div>
</div>
<div className="dropdownItem">
  <SVG/>
  <p>Title 3</p>
  <div className="subDropdownText">Additional text</div>
</div>
</MenuCardDropdown3> */