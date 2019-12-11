// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import { SimpleButton } from "../Components/SimpleButton";
// =========================

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const CopyButton = styled(SimpleButton)`
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} 0;
`;

export default function Form() {
  return (
    <Center>
      <Title>Form</Title>
      <form
        name="Test Form"
        method="POST"
        data-netlify="true"
        action="/success/"
      >
        <input type="hidden" name="form-name" value="Test Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt">
        <CopyButton>select</CopyButton>
      </Clipboard>
    </Center>
  );
}
