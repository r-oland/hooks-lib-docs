// Components==============
import Stock1Imp from "assets/Stock1.inline.svg";
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import { BigSquareButton } from "../Components/BigSquareButton";
import { IconButton } from "../Components/IconButton";
import { RoundedButton } from "../Components/RoundedButton";
import SlideInButton from "../Components/SlideInButton";
import { SquareButton } from "../Components/SquareButton";
import { TransparentButton } from "../Components/TransparentButton";
// =========================

const Wrapper = styled(Container)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 4em 3em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 4em 0;
`;

const BlackBackground = styled.div`
  background-color: #544e4e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 1em;
  margin: 0 auto;
`;

const Stock1Svg = styled(Stock1Imp)`
  .color {
    fill: ${({ theme }) => theme.white};
  }

  width: 50%;
`;

export default function ButtonsNormal() {
  return (
    <Wrapper>
      <h2>Normal buttons</h2>
      <Grid>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/RoundedButton.js">
          <RoundedButton>Button text</RoundedButton>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SquareButton.js">
          <SquareButton>Button text</SquareButton>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BigSquareButton.js">
          <BigSquareButton>Button text</BigSquareButton>
        </Clipboard>
        <BlackBackground>
          <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TransparentButton.js">
            <TransparentButton>Button text</TransparentButton>
          </Clipboard>
        </BlackBackground>
        <BlackBackground>
          <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SlideInButton.js">
            <SlideInButton>Button text</SlideInButton>
          </Clipboard>
        </BlackBackground>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/IconButton.js">
          <IconButton>
            <Stock1Svg />
          </IconButton>
        </Clipboard>
      </Grid>
    </Wrapper>
  );
}
