// Components==============
import Stock1Imp from "assets/Stock1.inline.svg";
import React from "react";
import styled from "styled-components";
import { IconButton } from "../Components/IconButton";
import OpacityButton from "../Components/OpacityButton";
import { SimpleButton } from "../Components/SimpleButton";
import SlideInButton from "../Components/SlideInButton";
import { TransparentButton } from "../Components/TransparentButton";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Grid = styled.div`
  text-align: center;
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

export default function NomralButtons() {
  return (
    <Layout>
      <Head title="Normal Buttons" />
      <Title>Normal Buttons</Title>
      <Grid>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleButton.js">
          <SimpleButton>Button text</SimpleButton>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/TransparentButton.js">
          <TransparentButton>Button text</TransparentButton>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SlideInButton.js">
          <SlideInButton>Button text</SlideInButton>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/IconButton.js">
          <IconButton>
            <Stock1Svg />
          </IconButton>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/OpacityButton.js">
          <OpacityButton>Button text</OpacityButton>
        </Clipboard>
      </Grid>
    </Layout>
  );
}
