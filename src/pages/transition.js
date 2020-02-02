// Components==============
import React from "react";
import styled from "styled-components";
import TLink from "../Components/TLink";
import Head from "../Layout/Head";
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

export default function Transition() {
  return (
    <Layout>
      <Head title="Transition" />
      <Wrapper>
        <h3>
          You have transitioned smoothly
          <span role="img" aria-label="cool">
            😎
          </span>
        </h3>
        <TLink to="/pageTransitions">BACK</TLink>
      </Wrapper>
    </Layout>
  );
}
