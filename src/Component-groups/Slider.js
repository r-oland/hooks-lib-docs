// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicSlider from "../Components/BasicSlider";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
`;

export default function Slider() {
  const [slideState, setSlideState] = useState(0);

  return (
    <Container>
      <Title>Maps</Title>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicSlider.js">
        <BasicSlider slideState={slideState} setSlideState={setSlideState} />
      </Clipboard>
    </Container>
  );
}
