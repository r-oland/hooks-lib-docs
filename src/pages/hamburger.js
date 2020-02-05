// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ASMHamburger from "../Components/AnimatedSideMenu/ASMHamburger";
import ASMMenu from "../Components/AnimatedSideMenu/ASMMenu";
import AWMHamburger from "../Components/AnimatedWaterfallMenu/AWMHamburger";
import AWMMenu from "../Components/AnimatedWaterfallMenu/AWMMenu";
import FullScreenWaterfallMenu from "../Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s5}`};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Margin = styled(Clipboard)`
  padding-bottom: 3em;
  display: block;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s4}`};
`;

export default function Hamburger() {
  const [menuState, setMenuState] = useState("closed");
  const [menuState2, setMenuState2] = useState("closed");

  return (
    <Layout>
      <Head title="Hamburger menu" />
      <Title>Hamburger menu</Title>
      <Wrapper>
        <FullScreenWaterfallMenu />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu.js">
          select
        </Margin>

        <AWMHamburger menuState={menuState} setMenuState={setMenuState} />
        <AWMMenu menuState={menuState} setMenuState={setMenuState} />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedWaterfallMenu/AWMHamburger.js">
          select
        </Margin>

        <ASMHamburger menuState={menuState2} setMenuState={setMenuState2} />
        <ASMMenu menuState={menuState2} setMenuState={setMenuState2} />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedSideMenu/ASMHamburger.js">
          select
        </Margin>
      </Wrapper>
    </Layout>
  );
}
