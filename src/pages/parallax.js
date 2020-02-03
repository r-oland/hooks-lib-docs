// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ParallaxItem from "../Components/ParallaxItem";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s10}`};
`;

const Wrapper = styled.div`
  text-align: center;
  height: 150vh;

  img {
    margin: 0 auto;
    height: 200px;

    @media screen and (min-width: 800px) {
      height: 70vh;
    }
  }
`;

const Clip = styled(Clipboard)``;

export default function Parallax() {
  return (
    <Layout>
      <Head title="Parallax" />
      <Title>Parallax</Title>
      <Wrapper>
        <ParallaxItem>
          <img src={Stock} alt="stock" />
        </ParallaxItem>
        <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/ParallaxItem.js">
          Select
        </Clip>
      </Wrapper>
    </Layout>
  );
}
