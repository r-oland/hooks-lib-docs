// Components==============
import React from "react";
import styled from "styled-components";
import FluidHamburger from "../Components/FluidMenu/FluidHamburger";
import FluidMenu from "../Components/FluidMenu/FluidMenu";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

const Message = styled.h3`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s4}`};
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export default function FluidMenuPage() {
  return (
    <Layout>
      <Head title="Fluid menu" />
      <Title>Fluid menu</Title>
      <Message>Reduce window size to a maximum of 800px</Message>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FluidMenu/FluidHamburger.js">
          <FluidHamburger />
          <FluidMenu to="/transition2" />
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
