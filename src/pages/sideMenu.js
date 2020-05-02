// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import ASMHamburger from "../Components/AnimatedSideMenu/ASMHamburger";
import ASMMenu from "../Components/AnimatedSideMenu/ASMMenu";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s5}`};
`;

const Absolute = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
`;

export default function SideMenu() {
  const [menuState, setMenuState] = useState("closed");

  return (
    <>
      <Head title="Side menu" />
      <Title>Side menu</Title>

      <Absolute>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedSideMenu/ASMHamburger.js">
          <ASMHamburger menuState={menuState} setMenuState={setMenuState} />
          <ASMMenu menuState={menuState} setMenuState={setMenuState} />
        </Clipboard>
      </Absolute>
    </>
  );
}
