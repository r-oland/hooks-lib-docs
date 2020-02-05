// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import FluidHamburger from "../Components/FluidMenu/FluidHamburger";
import FluidMenu from "../Components/FluidMenu/FluidMenu";
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

export default function TransitionMenu() {
  return (
    <Layout>
      <Head title="Transition menu" />
      <Title>Transition menu</Title>
      <Wrapper>
        <Message>Reduce window size to a maximum of 800px</Message>
        <FluidHamburger />
        <FluidMenu to="/transition2" />
        <Clipboard
          style={{ display: "block", margin: "0 auto" }}
          data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FluidMenu/FluidHamburger.js"
        >
          select
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
