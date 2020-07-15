// Components==============
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../UnderlineButton";
// =========================

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  h1 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }

  h4 {
    font-size: 22px;
  }
`;

export default function Hero() {
  return (
    <Wrapper>
      <UnderlineButton as="h1">hooks-lib</UnderlineButton>
      <h4>A strongly typed minimalistic React hooks library</h4>
    </Wrapper>
  );
}

// <a
//   href={"https://www.npmjs.com/package/hooks-lib"}
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   hooks-lib
// </a>
