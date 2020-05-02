// Components==============
import React from "react";
import styled from "styled-components";
import QuestionAddOn from "../Components/QuestionAddOn/QuestionAddOn";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

export default function AddOns() {
  return (
    <>
      <Head title="Add ons" />
      <Title>Add ons</Title>
      <Wrapper>
        <Clipboard
          style={{ display: "flex", justifyContent: "center" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/QuestionAddOn/QuestionAddOn.js"
        >
          <p style={{ paddingRight: "0.5em" }}> this needs more explanation</p>
          <QuestionAddOn>
            <p>
              This could be a explanation or a addition to the text that's next
              to this field
            </p>
          </QuestionAddOn>
        </Clipboard>
      </Wrapper>
    </>
  );
}
