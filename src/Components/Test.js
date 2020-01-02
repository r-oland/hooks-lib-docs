// Components==============
import { TransitionState } from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
// =========================

const Fade = styled.div`
  opacity: ${({ mount }) => (mount ? 1 : 0)};
  transform: ${({ mount }) => (mount ? `initial` : `translateY(100vh)`)};
  transition: 0.5s;
`;

export default function Test({ children }) {
  return (
    <TransitionState>
      {({ mount }) => {
        return <Fade mount={mount}>{children}</Fade>;
      }}
    </TransitionState>
  );
}
