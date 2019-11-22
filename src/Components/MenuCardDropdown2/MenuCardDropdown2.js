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
    cardIsVisible === true ? theme.primary.s4 : theme.gray.s7};
  transition: 0.2s;
`;

const MenuDropdownArrowSvg = styled(MenuDropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  width: 10px;
  margin-left: 9.5em;

  .svgColor {
    fill: ${({ theme, cardIsVisible }) =>
      cardIsVisible === true ? theme.primary.s4 : theme.gray.s7};
  }
`;

const Card = styled.div`
  max-height: ${({ cardIsVisible }) =>
    cardIsVisible === true ? `1500%` : "0px"};
  visibility: ${({ cardIsVisible }) =>
    cardIsVisible === true ? `visible` : "hidden"};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: 0px 4px 8px rgba(112, 112, 112, 0.15);
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  position: absolute;
  top: 60px;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: 100;
  text-align: left;

  @media screen and (min-width: 600px) {
    width: 175%;
    left: -37.5%;
  }

  .dropdownItem {
    border-bottom: rgba(112, 112, 112, 0.15) 2px solid;
    margin: 0;
    padding: 1.3em 1.5em;
    transition: 0.6s;
    opacity: ${({ cardIsVisible }) => (cardIsVisible === true ? `1` : "0")};

    &:hover {
      transform: translateX(7.5px);
    }
  }

  p {
    color: ${({ theme: { primary } }) => primary.s4};
    margin: 0 0 0.4em;
    ${flexUnit(1.5, 17.5, 18.5, "vw", "font-size")}
  }

  .subDropdownText {
    color: ${({ theme: { gray } }) => gray.s7};
    margin-left: 1em;
    font-weight: 400;
  }
`;

export default function MenuCardDropdown2({ children, name }) {
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

/* <MenuCardDropdown2 name="Dropdown item">
<p>Title 1</p>
<p>Title 2 </p>
<p>Title 3</p>
</MenuCardDropdown2> */
