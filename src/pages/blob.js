// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BlobAnimation from "../Components/BlobAnimation";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================
const Title = styled.h2`
  margin: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s3} `};
`;

const Wrapper = styled.div`
  margin-left: ${({ theme: { spacing } }) => spacing.s6};
  position: relative;
  z-index: 1;
`;

export default function Blob() {
  return (
    <Layout>
      <Head title="Blob animation" />

      <Wrapper>
        <Title>Blob animation</Title>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BlobAnimation.js">
          Select
        </Clipboard>
      </Wrapper>
      <BlobAnimation />
    </Layout>
  );
}
