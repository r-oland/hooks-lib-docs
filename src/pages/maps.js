// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicMap from "../Components/BasicMap";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

const Clip = styled(Clipboard)`
  display: block;
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} auto;
`;

export default function Maps() {
  return (
    <Layout>
      <Head title="Maps" />
      <Title>Maps</Title>
      <Wrapper>
        <BasicMap />
        <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicMap.js">
          select
        </Clip>
      </Wrapper>
    </Layout>
  );
}
