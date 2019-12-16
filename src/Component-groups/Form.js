import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import DoubleForm from "../Components/DoubleForm.js/DoubleForm";
import JobForm from "../Components/JobForm/JobForm";
import { Container } from "../style/Mixins";

const Title = styled.h2`
  text-align: center;
`;

const Clip = styled(Clipboard)`
  display: block;
  margin: 0 auto;
`;

export default function Form() {
  return (
    <Container>
      <Title>Form</Title>
      <JobForm />
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/JobForm/JobForm.js">
        Select
      </Clip>
      <DoubleForm />
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/DoubleForm.js/DoubleForm.js">
        Select
      </Clip>
    </Container>
  );
}
