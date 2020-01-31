// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import TextSwitchAnimation from "../Components/TextSwitchAnimation";
// =========================

const Wrapper = styled.div`
  text-align: center;

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Clip = styled(Clipboard)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function Blob() {
  return (
    <Wrapper>
      <h2>Text switch</h2>
      <p>
        this is text <TextSwitchAnimation />
      </p>

      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TextSwitchAnimation.js">
        Select
      </Clip>
    </Wrapper>
  );
}
