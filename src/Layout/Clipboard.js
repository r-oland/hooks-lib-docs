// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Clip = styled.button`
  cursor: initial;
`;

export default function Clipboard({ children, style, copy }) {
  return (
    <Clip
      style={style}
      onClick={() => {
        navigator.clipboard.writeText(copy);
      }}
    >
      {children}
    </Clip>
  );
}
