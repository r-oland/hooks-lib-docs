// Components==============
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../UnderlineButton";
import Links from "./Links";
// =========================

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  h1 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }

  h4 {
    font-size: 22px;
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }
`;

const Bar = styled.div`
  height: 1.2px;
  width: 70%;
  background: black;
  opacity: 0.1;
  margin: ${({ theme: { spacing } }) => spacing[4]} auto;
`;

export default function Hero() {
  return (
    <Wrapper>
      <UnderlineButton as="h1">hooks-lib</UnderlineButton>
      <h4>A strongly typed React hooks library</h4>
      <Links />
      <Bar />
    </Wrapper>
  );
}
