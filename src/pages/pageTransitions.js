// Components==============
import React from "react";
import styled from "styled-components";
import TLink from "../Components/TLink";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-top: ${({ theme: { spacing } }) => spacing.s10};
  }
`;

export default function PageTransitions() {
  return (
    <Layout>
      <Head title="Page transitions" />
      <Title>Page transitions</Title>
      <Wrapper>
        <Clipboard
          style={{ marginTop: `20vh` }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/pages/pageTransitions.js"
        >
          <TLink to="/transition">Transition</TLink>
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}

// npm install gatsby-plugin-transition-link

// Add to gatsby config:  `gatsby-plugin-transition-link`

// use TLink.js component

// Wrap content in layout.js with TransitionEffect.js component for 1 global transition

// Or wrap different transitionEffect components around the content for different page components
