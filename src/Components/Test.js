// Components==============
import { TransitionState } from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
// =========================

const Fade = styled.div`
  opacity: ${({ transitionStatus }) => {
    if (transitionStatus === "enterering" || transitionStatus === "entered") {
      return 1;
    } else {
      return 0;
    }
  }};
  transform: ${({ transitionStatus }) => {
    if (transitionStatus === "enterering" || transitionStatus === "entered") {
      return `initial`;
    } else {
      return `translateY(100vh)`;
    }
  }};

  overflow-y: ${({ transitionStatus }) => {
    if (transitionStatus === "enterering" || transitionStatus === "entered") {
      return `initial`;
    } else {
      return `hidden`;
    }
  }};

  transition: 0.4s;
`;

export default function Test({ children }) {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return <Fade transitionStatus={transitionStatus}> {children}</Fade>;
      }}
    </TransitionState>
  );
}
