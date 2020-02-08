// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

export default function Multilingual() {
  return (
    <Layout>
      <Head title="Multilingual" />
      <Title>Multilingual</Title>
      <Wrapper>
        <Clipboard
          style={{ display: "block", margin: "0 auto" }}
          data-clipboard-text="vscode://file/"
        >
          select
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
