// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicMap from "../Components/BasicMap";
import { SimpleButton } from "../Components/SimpleButton";
import { Container } from "../style/Mixins";
// =========================

const MapContainer = styled(Container)`
  text-align: center;
`;

const CopyButton = styled(SimpleButton)`
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} 0;
`;

export default function Maps() {
  return (
    <MapContainer>
      <h2>Maps</h2>
      <BasicMap />
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicMap.js">
        <CopyButton>select</CopyButton>
      </Clipboard>
    </MapContainer>
  );
}
