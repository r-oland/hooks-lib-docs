// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
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
  box-shadow: 0px 4px 8px rgba(112, 112, 112, 0.15);
  transition: 0.5s;
  width: 400px;
  position: absolute;
  left: -100px;
  top: 40px;
  transition: 0.2s;

  p {
    color: ${({ theme }) => theme.primary};
    margin: 1em 0 0;
    padding-bottom: 1em;
    border-bottom: rgba(112, 112, 112, 0.15) 2px solid;
  }
`;

export default function MenuCardDropdown({ children, name }) {
  const [cardIsVisible, setCardIsVisible] = useState(false);

  const handleChange = () =>
    cardIsVisible === false ? setCardIsVisible(true) : setCardIsVisible(false);

  const handleClickChange = () => {
    const Query = window.matchMedia("(max-width: 800px)");

    if (cardIsVisible === false) {
      setCardIsVisible(true);
    } else if (cardIsVisible === true && Query.matches) {
      setCardIsVisible(false);
    }
  };

  return (
    <Wrapper onMouseOver={handleChange} onMouseOut={handleChange}>
      <Grid onClick={handleClickChange}>
        <Item cardIsVisible={cardIsVisible}>{name}</Item>
        <MenuDropdownArrowSvg cardIsVisible={cardIsVisible} />
      </Grid>
      <Card cardIsVisible={cardIsVisible}>{children}</Card>
    </Wrapper>
  );
}
