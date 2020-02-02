// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import FoldFAQ from "../Components/FoldFAQ";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

const Clip = styled(Clipboard)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function Faq() {
  return (
    <Layout>
      <Head title="FAQ" />
      <Title>FAQ</Title>
      <Wrapper>
        <FoldFAQ />
        <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FoldFAQ.js">
          Select
        </Clip>
      </Wrapper>
    </Layout>
  );
}
