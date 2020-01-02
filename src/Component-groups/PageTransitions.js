// Components==============
import TransitionLink from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
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
        <TransitionLink to="/transition" exit={{ length: 0.4 }}>
          Transition
        </TransitionLink>
      </Wrapper2>
    </Wrapper>
  );
}

// npm install gatsby-plugin-transition-link

// Add to gatsby config:  `gatsby-plugin-transition-link`

// import TransitionLink from "gatsby-plugin-transition-link"
