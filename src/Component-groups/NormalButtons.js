// Components==============
import Stock1Imp from "assets/Stock1.inline.svg";
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import { IconButton } from "../Components/IconButton";
import OpacityButton from "../Components/OpacityButton";
import { SimpleButton } from "../Components/SimpleButton";
import SlideInButton from "../Components/SlideInButton";
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

const Stock1Svg = styled(Stock1Imp)`
  .color {
    fill: ${({ theme: { white } }) => white};
  }

  width: 50%;
`;

export default function ButtonsNormal() {
  return (
    <Wrapper>
      <h2>Normal buttons</h2>
      <Grid>
        <div>
          <SimpleButton>Button text</SimpleButton>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleButton.js"
          >
            select
          </Clipboard>
        </div>
        <div>
          <TransparentButton>Button text</TransparentButton>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TransparentButton.js"
          >
            select
          </Clipboard>
        </div>
        <div>
          <SlideInButton>Button text</SlideInButton>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SlideInButton.js"
          >
            select
          </Clipboard>
        </div>
        <div>
          <IconButton>
            <Stock1Svg />
          </IconButton>

          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/IconButton.js"
          >
            select
          </Clipboard>
        </div>
        <div>
          <OpacityButton>Button text</OpacityButton>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/OpacityButton.js"
          >
            select
          </Clipboard>
        </div>
      </Grid>
    </Wrapper>
  );
}
