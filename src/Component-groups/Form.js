import { navigate } from "gatsby-link";
import React from "react";
import styled from "styled-components";
import { SimpleButton } from "../Components/SimpleButton";
import { Container } from "../style/Mixins";

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

    min-height: 50px;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Form() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <Title>Form</Title>
      <FormCard
        name="test2"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `hidden` fields are required to support form submissions without JavaScript */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="test2" />
        <input type="text" name="name" onChange={handleChange} />

        <input type="email" name="email" onChange={handleChange} />
        <input type="file" name="file" />

        <textarea name="message" onChange={handleChange} />

        <SimpleButton as="button" type="submit">
          Send
        </SimpleButton>
      </FormCard>
    </Container>
  );
}
