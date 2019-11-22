// Components==============
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import CollapseCard from "../Components/CollapseCard/CollapseCard";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Margin = styled(Clipboard)`
  margin-bottom: 3em;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 500px;
  }
`;

export default function Hamburger() {
  return (
    <Container>
      <Title>Collapse elements</Title>
      <Elements>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard/CollapseCard.js">
          <CollapseCard />
        </Margin>
      </Elements>
    </Container>
  );
}
