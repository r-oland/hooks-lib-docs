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
        name="test-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Bert Jan" type="text" />
        <br />
        <br />
        <SimpleButton as="button">Submit</SimpleButton>
      </form>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt">
        <CopyButton>select</CopyButton>
      </Clipboard>
    </Center>
  );
}
