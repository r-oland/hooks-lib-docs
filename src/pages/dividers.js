// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import { Cylinder } from "../Components/Cylinder/Cylinder";
import { HalfRoundedLarge } from "../Components/HalfRoundedLarge/HalfRoundedLarge";
import { HalfRoundedSmall } from "../Components/HalfRoundedSmall/HalfRoundedSmall";
import { Hill } from "../Components/Hill/Hill";
import { Ramp2 } from "../Components/Ramp2/Ramp2";
import { RampLarge } from "../Components/RampLarge/RampLarge";
import { RampSmall } from "../Components/RampSmall/RampSmall";
import { Waves } from "../Components/Waves/Waves";
import { Waves2 } from "../Components/Waves2/Waves2";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";

// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  min-height: 90vh;
`;

const Margin = styled(Clipboard)`
  margin-bottom: 3em;
`;

const BackgroundColor = styled.div`
  background-color: ${({ theme: { primary } }) => primary.s4};
`;

export default function Dividers() {
  return (
    <Layout>
      <Head title="Dividers" />
      <Title>Dividers</Title>
      <Wrapper>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedLarge/HalfRoundedLarge.js">
          <HalfRoundedLarge />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedSmall/HalfRoundedSmall.js">
          <HalfRoundedSmall />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Ramp2/Ramp2.js">
          <Ramp2 />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/RampSmall/RampSmall.js">
          <RampSmall />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedLarge/HalfRoundedLarge.js">
          <RampLarge />
        </Margin>
        <BackgroundColor>
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Waves/Waves.js">
            <Waves />
          </Margin>
        </BackgroundColor>
        <BackgroundColor>
          <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Waves2/Waves2.js">
            <Waves2 />
          </Clipboard>
        </BackgroundColor>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Cylinder/Cylinder.js">
          <Cylinder />
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Hill/Hill.js">
          <Hill />
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
