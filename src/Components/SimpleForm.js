import React from "react";
import styled from "styled-components";
import { SimpleButton } from "../Components/SimpleButton";

const Title = styled.h2`
  text-align: center;
`;

const FormCard = styled.form`
  margin: ${({ theme: { spacing } }) => spacing.s8} auto 0;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  text-align: center;

  input,
  textarea {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    border: none;
    box-shadow: ${({ theme: { shadow } }) => shadow.small};
    background-color: ${({ theme: { white } }) => white};

    min-height: 50px;
  }
`;

export default function SimpleForm() {
  return (
    <div>
      <Title>Form</Title>
      <FormCard
        name="test2"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* The `hidden` fields are required to support form submissions without JavaScript */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="test2" />
        <input type="text" name="name" />

        <input type="email" name="email" />
        <input type="file" name="file" />

        <textarea name="message" />

        <SimpleButton as="button" type="submit">
          Send
        </SimpleButton>
      </FormCard>
    </div>
  );
}
