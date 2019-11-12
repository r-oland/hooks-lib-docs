// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import { L, M, S } from "../Components/Raleway/Styling";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Example = styled(Clipboard)`
  text-align: left;
`;

export default function Raleway() {
  return (
    <Example data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt">
      <Title>Raleway</Title>
      <Container>
        <h1>This is a H1 header </h1>
        <h2>This is a H2 header </h2>
        <h3>This is a H3 header </h3>
        <L>This is a large text</L>
        <M>This is a medium text</M>
        <S>This is a small text</S>
        <L>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </L>
        <M>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </M>
        <S>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          nam perspiciatis ullam aliquam dolor non placeat odio voluptatem
          expedita minima vel fugit ipsum quia, corporis, iusto veritatis vero?
          Eligendi asperiores rerum totam sunt, placeat vel! Velit suscipit sed,
          iure, iste, voluptate repellendus possimus blanditiis harum earum
          sequi eveniet culpa?
        </S>
      </Container>
    </Example>
  );
}
