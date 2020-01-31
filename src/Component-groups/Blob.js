// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BlobAnimation from "../Components/BlobAnimation";

// =========================

const Clip = styled(Clipboard)`
  position: absolute;
  top: 80vh;
  left: 20vw;
`;

export default function Blob() {
  return (
    <div>
      <h2 style={{ paddingLeft: "50px" }}>Blob animation</h2>
      <BlobAnimation />
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BlobAnimation.js">
        Select
      </Clip>
    </div>
  );
}
