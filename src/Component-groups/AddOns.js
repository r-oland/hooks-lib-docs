// Components==============
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import QuestionAddOn from "../Components/QuestionAddOn/QuestionAddOn";
// =========================

const Wrapper = styled(Container)`
  h2 {
    text-align: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Clip = styled(Clipboard)`
  display: block;
  margin: 0 auto 3em;
  padding-top: 1em;
`;

export default function AddOns() {
  return (
    <Wrapper>
      <h2>Add ons</h2>
      <p style={{ paddingRight: "0.5em" }}> this needs more explanation</p>
      <QuestionAddOn>
        <p>
          This could be a explanation or a addition to the text that's next to
          this field
        </p>
      </QuestionAddOn>
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/QuestionAddOn/QuestionAddOn.js">
        select
      </Clip>
    </Wrapper>
  );
}
