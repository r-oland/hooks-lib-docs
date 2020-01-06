// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ParallaxItem from "../Components/ParallaxItem";
// =========================

const Wrapper = styled.div`
  text-align: center;
  height: 300vh;

  h2 {
    margin-bottom: 50vh;
  }

  img {
    width: 60vw;
    position: relative;
    margin: 2em auto 1em;
  }
`;

export default function Parallax() {
  return (
    <Wrapper>
      <h2>Parallax scrolling</h2>
      <ParallaxItem>
        <img src={Stock} alt="stock" />
      </ParallaxItem>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Component-groups/Parallax.js">
        Select
      </Clipboard>
    </Wrapper>
  );
}
