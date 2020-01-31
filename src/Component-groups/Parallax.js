// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ParallaxItem from "../Components/ParallaxItem";
// =========================

const Wrapper = styled.div`
  text-align: center;
  height: 150vh;

  img {
    width: 60vw;
    margin: 0 auto;
  }
`;

const Test = styled(Clipboard)`
  margin-top: 40px;
`;

export default function Parallax() {
  return (
    <Wrapper>
      <h2>Parallax scrolling</h2>
      <ParallaxItem>
        <img src={Stock} alt="stock" />
      </ParallaxItem>
      <Test data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Component-groups/Parallax.js">
        Select
      </Test>
    </Wrapper>
  );
}
