// Components==============
import { Container, L, S, Xs } from "mixins";
import React from "react";
import styled from "styled-components";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

const Margin = styled.div`
  margin: 0.8rem 0;
`;

export default function Raleway() {
  return (
    <>
      <Head title="Raleway" />
      <Title>Raleway</Title>
      <Wrapper>
        <Clipboard
          style={{ textAlign: "left" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Raleway/Font-face.txt"
        >
          <Container>
            <h1>This is a H1 header </h1>
            <Margin />
            <h2>This is a H2 header </h2>
            <Margin />
            <h3>This is a H3 header </h3>
            <Margin />
            <L>This is a large text</L>
            <Margin />
            <p>This is a medium text</p>
            <Margin />
            <S>This is a small text</S>
            <Margin />
            <Xs>This is a extra small text</Xs>
            <Margin />
            <L>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum nam perspiciatis ullam aliquam dolor non placeat odio
              voluptatem expedita minima vel fugit ipsum quia, corporis, iusto
              veritatis vero? Eligendi asperiores rerum totam sunt, placeat vel!
              Velit suscipit sed, iure, iste, voluptate repellendus possimus
              blanditiis harum earum sequi eveniet culpa?
            </L>
            <Margin />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum nam perspiciatis ullam aliquam dolor non placeat odio
              voluptatem expedita minima vel fugit ipsum quia, corporis, iusto
              veritatis vero? Eligendi asperiores rerum totam sunt, placeat vel!
              Velit suscipit sed, iure, iste, voluptate repellendus possimus
              blanditiis harum earum sequi eveniet culpa?
            </p>
            <Margin />
            <S>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum nam perspiciatis ullam aliquam dolor non placeat odio
              voluptatem expedita minima vel fugit ipsum quia, corporis, iusto
              veritatis vero? Eligendi asperiores rerum totam sunt, placeat vel!
              Velit suscipit sed, iure, iste, voluptate repellendus possimus
              blanditiis harum earum sequi eveniet culpa?
            </S>
            <Margin />
            <Xs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum nam perspiciatis ullam aliquam dolor non placeat odio
              voluptatem expedita minima vel fugit ipsum quia, corporis, iusto
              veritatis vero? Eligendi asperiores rerum totam sunt, placeat vel!
              Velit suscipit sed, iure, iste, voluptate repellendus possimus
              blanditiis harum earum sequi eveniet culpa?
            </Xs>
          </Container>
        </Clipboard>
      </Wrapper>
    </>
  );
}
