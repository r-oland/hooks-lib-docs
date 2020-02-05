// Components==============
import React from "react";
import styled from "styled-components";
import FluidHamburger from "../Components/FluidMenu/FluidHamburger";
import FluidMenu from "../Components/FluidMenu/FluidMenu";
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

export default function Transition2() {
  return (
    <Layout>
      <Head title="Transition" />
      <Wrapper>
        <FluidHamburger />
        <FluidMenu to="/transitionMenu" />
      </Wrapper>
    </Layout>
  );
}
