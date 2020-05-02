// Components==============
import React from "react";
import styled from "styled-components";
import DoubleForm from "../Components/DoubleForm.js/DoubleForm";
import JobForm from "../Components/JobForm/JobForm";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)``;

export default function Form() {
  return (
    <>
      <Head title="Standard form" />
      <Title>Standard form</Title>
      <Wrapper>
        <Clipboard
          style={{ width: `100%`, textAlign: "left" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/JobForm/JobForm.js"
        >
          <JobForm />
        </Clipboard>

        <Clipboard
          style={{ width: `100%`, textAlign: "left" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/DoubleForm.js/DoubleForm.js"
        >
          <DoubleForm />
        </Clipboard>
      </Wrapper>
    </>
  );
}
