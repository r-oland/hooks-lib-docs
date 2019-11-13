// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../../style/Mixins";
import DropdownArrowImp from ".//DropdownArrow.inline.svg";
// =========================

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const SquareButton = styled.div`
  background-color: ${({ theme, isExpended }) =>
    isExpended === true ? `${theme.primary}` : `${theme.secondary}`};
  padding: 0.6em 1.6em;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in-out;
  }
`;

const Content = styled.p`
  margin: 0;
  ${flexUnit(2, 17, 19, "vw", "font-size")}
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  grid-row: 1;
  grid-column: 1/3;
  padding: 0 0.4em;
`;

const DropdownArrowSvg = styled(DropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  width: 300%;
`;

const Items = styled.div`
  max-height: ${({ isExpended }) => (isExpended === true ? `400px` : "0px")};
  position: absolute;
  text-align: left;
  padding: 0 1em 0 1em;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0px 4px 8px rgba(112, 112, 112, 0.15);
  transition: 0.5s;
  min-width: 120%;
  z-index: 100;

  ul {
    display: ${({ isExpended }) => (isExpended === true ? `initial` : "none")};
  }

  li {
    padding: 0.65em 1em 0.65em 0.5em;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.3s;
    }
  }
`;

export default function SquareDropdownButton2({ children, buttonText }) {
  const [isExpended, setIsExpended] = useState(false);

  const handleEvent = () =>
    isExpended === false ? setIsExpended(true) : setIsExpended(false);

  return (
    <Wrapper>
      <SquareButton onClick={handleEvent} isExpended={isExpended}>
        <Grid>
          <Content>{buttonText}</Content>
          <DropdownArrowSvg />
        </Grid>
      </SquareButton>
      <Items isExpended={isExpended}>
        <ul isExpended={isExpended}>{children}</ul>
      </Items>
    </Wrapper>
  );
}

/* <SquareDropdownButton2 buttonText={`button text`}>
<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>
</SquareDropdownButton2> */
