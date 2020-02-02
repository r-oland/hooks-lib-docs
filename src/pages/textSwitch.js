// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import TextSwitchAnimation from "../Components/TextSwitchAnimation";
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

const Clip = styled(Clipboard)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function TextSwitch() {
  return (
    <Layout>
      <Head title="Text switch" />
      <Title>Text switch</Title>
      <Wrapper>
        <p>
          this is text <TextSwitchAnimation />
        </p>

        <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TextSwitchAnimation.js">
          Select
        </Clip>
      </Wrapper>
    </Layout>
  );
}
