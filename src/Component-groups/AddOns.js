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

const Flex = styled(Clipboard)`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme: { spacing } }) => `${spacing.s6}`} 0;
`;

export default function AddOns() {
  return (
    <Wrapper>
      <h2>Add ons</h2>
      <Flex data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/QuestionAddOn/QuestionAddOn.js">
        <p style={{ paddingRight: "0.5em" }}> this needs more explanation</p>
        <QuestionAddOn>
          <p>
            This could be a explanation or a addition to the text that's next to
            this field
          </p>
        </QuestionAddOn>
      </Flex>
    </Wrapper>
  );
}
