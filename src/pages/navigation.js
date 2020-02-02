// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicNavigation from "../Components/BasicNavigation";
import BasicNavigationColor from "../Components/BasicNavigationColor";
import BasicNavigationOnScroll from "../Components/BasicNavigationOnScroll";
import BasicNavigationShadow from "../Components/BasicNavigationShadow";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  min-height: 90vh;
`;

const Margin = styled(Clipboard)`
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

export default function Navigation() {
  return (
    <Layout>
      <Head title="Navigation" />
      <Title>Navigation</Title>
      <Wrapper>
        <BasicNavigation />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigation.js">
          select
        </Margin>

        <BasicNavigationColor />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationColor.js">
          select
        </Margin>

        <BasicNavigationShadow />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationShadow.js">
          select
        </Margin>

        <BasicNavigationOnScroll />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationOnScroll.js">
          select
        </Margin>
      </Wrapper>
    </Layout>
  );
}
