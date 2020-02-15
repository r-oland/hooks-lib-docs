// Components==============
import React from "react";
import styled from "styled-components";
import TextSwitchAnimation from "../Components/TextSwitchAnimation";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  text-align: center;
`;

export default function TextSwitch() {
  return (
    <Layout>
      <Head title="Text switch" />
      <Title>Text switch</Title>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TextSwitchAnimation.js">
          <TextSwitchAnimation />
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
