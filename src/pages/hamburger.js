// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ASMHamburger from "../Components/AnimatedSideMenu/ASMHamburger";
import ASMMenu from "../Components/AnimatedSideMenu/ASMMenu";
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
  align-items: flex-end;
  flex-direction: column;
`;

const Padding = styled.div`
  padding-right: ${({ theme: { spacing } }) => spacing.s6};

  @media screen and (min-width: 600px) {
    padding-right: ${({ theme: { spacing } }) => spacing.s10};
  }

  @media screen and (min-width: 1200px) {
    padding-right: ${({ theme: { spacing } }) => spacing.s12};
  }
`;

const Margin = styled(Clipboard)`
  padding-bottom: 5em;
  display: block;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s4}`};
`;

export default function Hamburger() {
  const [menuState, setMenuState] = useState("closed");

  return (
    <Layout>
      <Head title="Hamburger menu" />
      <Title>Hamburger menu</Title>
      <Padding>
        <Wrapper>
          <FullScreenWaterfallMenu />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu.js">
            select
          </Margin>

          <ASMHamburger menuState={menuState} setMenuState={setMenuState} />
          <ASMMenu menuState={menuState} setMenuState={setMenuState} />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedSideMenu/ASMHamburger.js">
            select
          </Margin>
        </Wrapper>
      </Padding>
    </Layout>
  );
}
