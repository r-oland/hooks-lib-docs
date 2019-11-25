// Components==============
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import CollapseCard from "../Components/CollapseCard/CollapseCard";
import CollapseCard2 from "../Components/CollapseCard2/CollapseCard2";
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
`;

export default function Hamburger() {
  return (
    <Container>
      <Title>Collapse elements</Title>
      <Elements>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard/CollapseCard.js">
          <CollapseCard initial={"This could be a question as a example?"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
            ratione libero non. Laudantium rerum numquam quo tenetur, nihil,
            sit, ullam incidunt illo repudiandae voluptates placeat earum error
            at quod pariatur sed quia. Laudantium sequi et commodi laborum
            itaque quaerat.
          </CollapseCard>
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard2/CollapseCard2.js">
          <CollapseCard2 initial={"This could be a question as a example?"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
            ratione libero non. Laudantium rerum numquam quo tenetur, nihil,
            sit, ullam incidunt illo repudiandae voluptates placeat earum error
            at quod pariatur sed quia. Laudantium sequi et commodi laborum
            itaque quaerat.
          </CollapseCard2>
        </Margin>
      </Elements>
    </Container>
  );
}
