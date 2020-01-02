// Components==============
import { TransitionState } from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
// =========================

const Effect = styled.div`
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
      return `translateX(30vh)`;
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

export default function TransitionEffect({ children }) {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return <Effect transitionStatus={transitionStatus}> {children}</Effect>;
      }}
    </TransitionState>
  );
}
