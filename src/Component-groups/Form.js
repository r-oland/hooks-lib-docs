import React from "react";
import styled from "styled-components";
import JobForm from "../Components/JobForm";
import { Container } from "../style/Mixins";

const Title = styled.h2`
  text-align: center;
`;

export default function Form() {
  return (
    <Container>
      <Title>Form</Title>
      <JobForm />
    </Container>
  );
}
