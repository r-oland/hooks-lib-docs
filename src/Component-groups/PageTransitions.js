// Components==============
import React from "react";
import styled from "styled-components";
import TLink from "../Components/TLink";
// =========================

const Wrapper = styled.div`
  text-align: center;
`;

const Wrapper2 = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PageTransitions() {
  return (
    <Wrapper>
      <h2>Page transitions</h2>
      <Wrapper2>
        <TLink to="/transition">Transition</TLink>
      </Wrapper2>
    </Wrapper>
  );
}

// npm install gatsby-plugin-transition-link

// Add to gatsby config:  `gatsby-plugin-transition-link`

// Import TLink.js component

// Wrap transition area in TransitionEffect.js component
