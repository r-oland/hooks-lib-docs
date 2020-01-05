// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
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
  flex-direction: column;

  a {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

export default function PageTransitions() {
  return (
    <Wrapper>
      <h2>Page transitions</h2>
      <Wrapper2>
        <TLink to="/transition">Transition</TLink>
        <Clipboard
          style={{ marginTop: `20vh` }}
          data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Component-groups/PageTransitions.js"
        >
          Select
        </Clipboard>
      </Wrapper2>
    </Wrapper>
  );
}

// npm install gatsby-plugin-transition-link

// Add to gatsby config:  `gatsby-plugin-transition-link`

// use TLink.js component

// Wrap context in layout.js with TransitionEffect.js component for 1 global transition
// Or wrap different transitionEffect components around the content of different page components
