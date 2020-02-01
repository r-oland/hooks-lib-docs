// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import FoldFAQ from "../Components/FoldFAQ";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled(Container)`
  h2 {
    text-align: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Clip = styled(Clipboard)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function FAQ() {
  return (
    <Wrapper>
      <h2>FAQ</h2>
      <FoldFAQ />
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FoldFAQ.js">
        Select
      </Clip>
    </Wrapper>
  );
}
