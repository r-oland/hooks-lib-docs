// Components==============
import React from "react";
import styled from "styled-components";
import TLink from "../Components/TLink";
import TransitionEffect from "../Components/TransitionEffect";
import Layout from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    margin-top: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

export default function transition({ mount }) {
  return (
    <Layout>
      <TransitionEffect mount={mount}>
        <Wrapper>
          <h3>
            You have transitioned smoothly
            <span role="img" aria-label="cool">
              😎
            </span>
          </h3>
          <TLink to="/">BACK</TLink>
        </Wrapper>
      </TransitionEffect>
    </Layout>
  );
}
