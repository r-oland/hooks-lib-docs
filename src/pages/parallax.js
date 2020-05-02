// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import styled from "styled-components";
import ParallaxItem from "../Components/ParallaxItem";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s10}`};
`;

const Wrapper = styled.div`
  text-align: center;
  height: 150vh;

  img {
    margin: 0 auto;
    height: 200px;

    @media screen and (min-width: 800px) {
      height: 70vh;
    }
  }
`;

export default function Parallax() {
  return (
    <>
      <Head title="Parallax" />
      <Title>Parallax</Title>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/ParallaxItem.js">
          <ParallaxItem>
            <img src={Stock} alt="stock" />
          </ParallaxItem>
        </Clipboard>
      </Wrapper>
    </>
  );
}
