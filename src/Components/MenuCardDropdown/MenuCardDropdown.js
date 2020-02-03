// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import MenuDropdownArrowImp from "./MenuDropdownArrow.inline.svg";
// =========================

const Wrapper = styled.div`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing.s5};
  cursor: pointer;

  @media screen and (min-width: 800px) {
    cursor: default;
  }
`;

const Item = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  color: ${({ theme, cardIsVisible }) =>
    cardIsVisible === "true" ? theme.primary.s4 : theme.gray.s7};
  transition: 0.2s;
`;

const MenuDropdownArrowSvg = styled(MenuDropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  width: 10px;
  margin-left: 9.5em;

  .svgColor {
    fill: ${({ theme, cardisvisible }) =>
      cardisvisible === "true" ? theme.primary.s4 : theme.gray.s7};
  }
`;

const Card = styled.div`
  max-height: ${({ cardIsVisible }) =>
    cardIsVisible === "true" ? `1500%` : "0px"};
  visibility: ${({ cardIsVisible }) =>
    cardIsVisible === "true" ? `visible` : "hidden"};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  position: absolute;
  top: 60px;
  transition: 0.5s ease-in-out;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 600px) {
    width: 150%;
    left: -25%;
  }

  p {
    cursor: pointer;
    color: ${({ theme: { primary } }) => primary.s4};
    padding: ${({ theme: { spacing } }) => spacing.s3};
    border-bottom: rgba(112, 112, 112, 0.15) 2px solid;
    opacity: ${({ cardIsVisible }) => (cardIsVisible === "true" ? `1` : "0")};
    transition: 0.5s;

    &:hover {
      color: ${({ theme: { white } }) => white};
      background-color: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

export default function MenuCardDropdown({ children, name }) {
  const [cardIsVisible, setCardIsVisible] = useState("false");

  const handleChange = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(min-width: 800px)");

    if (cardIsVisible === "false" && Query.matches) {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  const handleClickChange = () => {
    const Query =
      typeof window !== "undefined" && window.matchMedia("(max-width: 800px)");

    if (cardIsVisible === "false") {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  return (
    <Wrapper
      onMouseOver={handleChange}
      onMouseOut={handleChange}
      onFocus={handleChange}
      onBlur={handleChange}
    >
      <Grid onClick={handleClickChange}>
        <Item cardIsVisible={cardIsVisible}>{name}</Item>
        <MenuDropdownArrowSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.914 4.705"
          cardisvisible={cardIsVisible}
        >
          <g
            id="Group_2"
            data-name="Group 2"
            transform="translate(-231.691 -1663)"
          >
            <path
              class="svgColor"
              data-name="Path 1"
              d="M.573,0a.639.639,0,0,1,.573.689V4.82a.639.639,0,0,1-.573.689A.639.639,0,0,1,0,4.82V.689A.639.639,0,0,1,.573,0Z"
              transform="translate(231.691 1663.81) rotate(-45)"
              fill="#3d8693"
            />
            <path
              class="svgColor"
              data-name="Path 2"
              d="M.573,5.508a.639.639,0,0,0,.573-.689V.689A.639.639,0,0,0,.573,0,.639.639,0,0,0,0,.689V4.82A.639.639,0,0,0,.573,5.508Z"
              transform="translate(235.71 1667.705) rotate(-135)"
              fill="#3d8693"
            />
          </g>
        </MenuDropdownArrowSvg>
      </Grid>
      <Card cardIsVisible={cardIsVisible}>{children}</Card>
    </Wrapper>
  );
}

/* <MenuCardDropdown name="Dropdown item">
<p>Title 1</p>
<p>Title 2 </p>
<p>Title 3</p>
</MenuCardDropdown> */
