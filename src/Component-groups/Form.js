import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import DoubleForm from "../Components/DoubleForm.js/DoubleForm";
import JobForm from "../Components/JobForm/JobForm";
import { SimpleButton } from "../Components/SimpleButton";
import { Container } from "../style/Mixins";

const Title = styled.h2`
  text-align: center;
`;

export default function Form() {
  return (
    <Container>
      <Title>Form</Title>
      <JobForm />
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/JobForm/JobForm.js">
        <SimpleButton>Select</SimpleButton>
      </Clipboard>
      <DoubleForm />
      <Clipboard data-clipboard-text="vscode://file/d:d:/Freelancing/Code/Real projects/Components/src/Components/DoubleForm.js/DoubleForm.js">
        <SimpleButton>Select</SimpleButton>
      </Clipboard>
    </Container>
  );
}
