// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import QuestionAddOn from "../Components/QuestionAddOn/QuestionAddOn";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Clip = styled(Clipboard)`
  display: block;
  margin: 0 auto 3em;
  padding-top: 1em;
`;

export default function AddOns() {
  return (
    <Layout>
      <Head title="Add ons" />
      <Title>Add ons</Title>
      <Flex>
        <p style={{ paddingRight: "0.5em" }}> this needs more explanation</p>
        <QuestionAddOn>
          <p>
            This could be a explanation or a addition to the text that's next to
            this field
          </p>
        </QuestionAddOn>
      </Flex>
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/QuestionAddOn/QuestionAddOn.js">
        select
      </Clip>
    </Layout>
  );
}
