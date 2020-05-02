// Components==============
import React from "react";
import styled from "styled-components";
import BlobAnimation from "../Components/BlobAnimation";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
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
    <>
      <Head title="Blob animation" />

      <Wrapper>
        <Title>Blob animation</Title>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BlobAnimation.js">
          <BlobAnimation />
        </Clipboard>
      </Wrapper>
    </>
  );
}
