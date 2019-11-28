// Components==============
import { S } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import SwitchImp from "./Switch.inline.svg";
// =========================

const Wrapper = styled.div`
  cursor: pointer;
  margin: 0 auto;
  max-width: ${({ theme: { spacing } }) => spacing.s16};
  background-color: ${({ theme: { white } }) => white};
  transition: 0.8s;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s4}`};
  text-align: left;
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin-right: ${({ theme: { spacing } }) => spacing.s4};
    color: ${({ menuState, theme: { primary, black } }) =>
      menuState === "open" ? primary.s7 : black};
  }
`;

const SwitchSvg = styled(SwitchImp)`
  position: absolute;
  right: 0;
  width: 14px;
  transform: ${({ menustate }) =>
    menustate === "open" ? `rotate(0)` : `rotate(90deg)`};
  transition: 0.5s;

  #changeColor {
    fill: ${({ theme: { primary } }) => primary.s4};
  }
`;

const Fold = styled.div`
  transition: 0.3s;
  max-height: ${({ menuState }) => (menuState === "open" ? "40vh" : `0`)};
  margin-top: ${({ menuState, theme: { spacing } }) =>
    menuState === "open" ? spacing.s5 : `0`};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};

  p {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.2s;
    color: ${({ theme: { gray } }) => gray.s8};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }
`;

export default function CollapseCard2({ initial, children }) {
  const [menuState, setMenuState] = useState("closed");

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <Wrapper menuState={menuState} onClick={changeMenu}>
      <Flex menuState={menuState}>
        <p>{initial}</p>
        <SwitchSvg menustate={menuState} />
      </Flex>
      <Fold menuState={menuState}>
        <S>{children}</S>
      </Fold>
    </Wrapper>
  );
}

/* <CollapseCard initial={"This could be a question as a example?"}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
ratione libero non. Laudantium rerum numquam quo tenetur, nihil,
sit, ullam incidunt illo repudiandae voluptates placeat earum error
at quod pariatur sed quia. Laudantium sequi et commodi laborum
itaque quaerat.
</CollapseCard> */