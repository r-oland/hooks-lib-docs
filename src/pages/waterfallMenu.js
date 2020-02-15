// Components==============
import React from "react";
import styled from "styled-components";
import FullScreenWaterfallMenu from "../Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
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

export default function WaterfallMenu() {
  return (
    <Layout>
      <Head title="Waterfall menu" />
      <Title>Waterfall menu</Title>

      <Absolute>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu.js">
          <FullScreenWaterfallMenu />
        </Clipboard>
      </Absolute>
    </Layout>
  );
}
