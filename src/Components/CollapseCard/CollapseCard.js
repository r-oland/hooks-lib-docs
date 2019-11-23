// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import SwitchImp from "./Switch.inline.svg";
// =========================

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${({ theme: { white } }) => white};
  transition: 0.8s;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  padding: 1em 1em;
  text-align: left;
`;

const Flex = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin: 0;
  }
`;

const SwitchSvg = styled(SwitchImp)`
  width: 11px;
  transform: ${({ menuState }) =>
    menuState === "open" ? `rotate(0)` : `rotate(45deg)`};
  transition: 0.5s;

  #changeColor {
    fill: ${({ theme: { primary } }) => primary.s4};
  }
`;

const Fold = styled.div`
  transition: 0.3s ease-in;
  max-height: ${({ menuState }) => (menuState === "open" ? "50vh" : `0`)};
  margin-top: ${({ menuState }) => (menuState === "open" ? "1.5em" : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
`;

export default function CollapseCard() {
  const [menuState, setMenuState] = useState("closed");

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <Wrapper menuState={menuState}>
      <Flex onClick={changeMenu}>
        <p>dummy question text bla bla?</p>
        <SwitchSvg menuState={menuState} />
      </Flex>
      <Fold menuState={menuState}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
          ratione libero non. Laudantium rerum numquam quo tenetur, nihil, sit,
          ullam incidunt illo repudiandae voluptates placeat earum error at quod
          pariatur sed quia. Laudantium sequi et commodi laborum itaque quaerat.
        </p>
      </Fold>
    </Wrapper>
  );
}
