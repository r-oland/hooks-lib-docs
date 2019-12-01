// Components==============
import React from "react";
import styled from "styled-components";
import BasicMap from "../Components/BasicMap";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
`;

export default function Maps() {
  return (
    <Container>
      <Title>Maps</Title>
      <BasicMap />
    </Container>
  );
}
