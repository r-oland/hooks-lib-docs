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
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  text-align: center;
  height: 150vh;

  img {
    width: 60vw;
    margin: 0 auto;
  }
`;

const Test = styled(Clipboard)`
  margin-top: 40px;
`;

export default function Parallax() {
  return (
    <Layout>
      <Head title="Parallax" />
      <Title>Parallax</Title>
      <Wrapper>
        <ParallaxItem>
          <img src={Stock} alt="stock" />
        </ParallaxItem>
        <Test data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Component-groups/Parallax.js">
          Select
        </Test>
      </Wrapper>
    </Layout>
  );
}
