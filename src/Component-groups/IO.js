// Components==============
import Stock from "assets/Stock.jpeg";
import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  height: 200vh;
  text-align: center;

  img {
    margin-top: 100vh;
    opacity: ${({ inView }) => (inView === true ? 1 : 0)};
    transition: 0.6s;
  }
`;

export default function IO() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <Wrapper inView={inView}>
      <h2>Intersection observer</h2>
      <img src={Stock} ref={ref} alt="stock" />
    </Wrapper>
  );
}

// npm install react-intersection-observer

// const [ref, inView] = useInView({threshold: 0, triggerOnce: false})

// use ref prop
