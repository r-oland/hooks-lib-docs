// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
// =========================

const Test = styled.h2``;

export default function Button1() {
   return (
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Button1.js">
         <Test>Button1</Test>
      </Clipboard>
   );
}
