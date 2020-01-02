// Components==============
import TransitionLink from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
import Test from "../Components/Test";
import Layout from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function transition() {
  return (
    <Layout>
      <Test>
        <Wrapper>
          <h3>
            You have transitioned smoothly
            <span role="img" aria-label="cool">
              😎
            </span>
          </h3>
          <TransitionLink to="/" exit={{ length: 0.4 }}>
            BACK
          </TransitionLink>
        </Wrapper>
      </Test>
    </Layout>
  );
}
