// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicSlider from "../Components/BasicSlider";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Clip = styled(Clipboard)`
  display: block;
  margin: 0 auto;
`;

export default function Sliders() {
  const [slideState, setSlideState] = useState(0);

  return (
    <Layout>
      <Head title="Sliders" />
      <Title>Sliders</Title>
      <Container>
        <BasicSlider slideState={slideState} setSlideState={setSlideState} />
        <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicSlider.js">
          select
        </Clip>
      </Container>
    </Layout>
  );
}
