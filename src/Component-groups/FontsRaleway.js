// Components==============
import { Container, L, M, S, Xs } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Example = styled(Clipboard)`
  text-align: left;
`;

const Margin = styled.div`
  margin: 0.8rem 0;
`;

export default function Raleway() {
  return (
    <Example data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt">
      <Title>Raleway</Title>
      <Container>
        <h1>This is a H1 header </h1>
        <Margin />
        <h2>This is a H2 header </h2>
        <Margin />
        <h3>This is a H3 header </h3>
        <Margin />
        <L>This is a large text</L>
        <Margin />
        <M>This is a medium text</M>
        <Margin />
        <S>This is a small text</S>
        <Margin />
        <Xs>This is a extra small text</Xs>
        <Margin />
        <L>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </L>
        <Margin />
        <M>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </M>
        <Margin />
        <S>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </S>
        <Margin />
        <Xs>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </Xs>
      </Container>
    </Example>
  );
}
