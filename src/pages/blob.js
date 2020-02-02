// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BlobAnimation from "../Components/BlobAnimation";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  position: absolute;
  top: 80vh;
  left: 20vw;
`;

export default function Blob() {
  return (
    <Layout>
      <Head title="Blob animation" />
      <Title>Blob animation</Title>
      <Wrapper>
        <BlobAnimation />
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BlobAnimation.js">
          Select
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
