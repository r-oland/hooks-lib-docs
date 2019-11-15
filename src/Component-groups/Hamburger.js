// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
`;

export default function Hamburger() {
  return (
    <div>
      <Title>Hamburger menu's</Title>
      <Elements>
        <Clipboard data-clipboard-text="vscode://file/"></Clipboard>
      </Elements>
    </div>
  );
}