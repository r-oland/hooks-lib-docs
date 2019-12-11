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
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt">
        <CopyButton>select</CopyButton>
      </Clipboard>
    </Center>
  );
}
