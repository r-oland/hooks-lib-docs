// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  h2 {
    ${({ theme: { fontSize } }) => fontSize.h4}
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

export default function Content() {
  return (
    <Wrapper>
      <h2>Why? 🤔</h2>
      <p>content</p>
      <h2>Install 🔥</h2>
      <p>content</p>
    </Wrapper>
  );
}
