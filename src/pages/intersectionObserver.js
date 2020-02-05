// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import Clipboard from "react-clipboard.js";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  height: 200vh;
  text-align: center;

  img {
    margin-top: 80vh;
    opacity: ${({ inView }) => (inView === true ? 1 : 0)};
    transition: 0.6s;
  }
`;

export default function IntersectionObserver() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <Layout>
      <Head title="Intersection observer" />
      <Title>Intersection observer</Title>
      <Wrapper inView={inView}>
        <Clipboard
          style={{ marginTop: `20vh` }}
          data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/pages/intersectionObserver.js"
        >
          Select
        </Clipboard>
        <img src={Stock} ref={ref} alt="stock" />
      </Wrapper>
    </Layout>
  );
}

// npm install react-intersection-observer intersection-observer

// add import "intersection-observer" to gatsby-browser.js to prevent IE crash;

// import { useInView } from "react-intersection-observer";

// const [ref, inView] = useInView({threshold: 0, triggerOnce: false})

// use ref prop
