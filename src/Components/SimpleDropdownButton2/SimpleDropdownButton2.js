// Components==============
import { M } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import DropdownArrowImp from "./DropdownArrow.inline.svg";
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

const HalfRoundedButton = styled.div`
  background-color: ${({ theme, isExpended }) =>
    isExpended === true ? `${theme.primary.s5}` : `${theme.primary.s4}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { primary } }) => primary.s5};
    transition: all 0.2s ease-in-out;
  }
`;

const Content = styled(M)`
  margin: 0;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { white } }) => white};
  grid-row: 1;
  grid-column: 1/3;
  padding: ${({ theme: { spacing } }) => `${spacing.s2} ${spacing.s6}`};
`;

const DropdownArrowSvg = styled(DropdownArrowImp)`
  grid-row: 1;
  grid-column: 2/3;
  transform: translateX(-9px);
`;

const Items = styled.div`
  position: absolute;
  max-height: ${({ isExpended }) => (isExpended === true ? `600%` : "0px")};
  visibility: ${({ isExpended }) =>
    isExpended === true ? `visible` : "hidden"};
  text-align: left;
  padding: ${({ theme: { spacing } }) => ` 0 ${spacing.s4} 0 ${spacing.s4} `};
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-top: ${({ theme: { spacing } }) => `${spacing.s1}`};
  box-shadow: ${({ theme: { doubleShadow } }) => doubleShadow.small};
  transition: 0.5s;
  min-width: 120%;
  z-index: 100;

  ul {
    opacity: ${({ isExpended }) => (isExpended === true ? `1` : "0")};
    margin: ${({ theme: { spacing } }) => `${spacing.s2} 0`};
    transition: 0.2s ease-in;
  }

  li {
    padding: ${({ theme: { spacing } }) =>
      `${spacing.s2} ${spacing.s4} ${spacing.s2} ${spacing.s2}`};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
      transition: 0.3s;
    }
  }
`;

export default function SimpleDropdownButton2({ children, buttonText }) {
  const [isExpended, setIsExpended] = useState(false);

  const handleEvent = () =>
    isExpended === false ? setIsExpended(true) : setIsExpended(false);

  return (
    <Wrapper>
      <HalfRoundedButton onClick={handleEvent} isExpended={isExpended}>
        <Grid>
          <Content>{buttonText}</Content>
          <DropdownArrowSvg />
        </Grid>
      </HalfRoundedButton>
      <Items isExpended={isExpended}>
        <ul isExpended={isExpended}>{children}</ul>
      </Items>
    </Wrapper>
  );
}

/* <SimpleDropdownButton2 buttonText={`button text`}>
<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>
</SimpleDropdownButton2> */
