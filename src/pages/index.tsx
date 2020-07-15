// Components==============
import React from "react";
import styled from "styled-components";
import Content from "../components/home/Content";
import Hero from "../components/home/Hero";
import Image from "../components/home/Image";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
//=========================

const Wrapper = styled.div`
  max-width: 750px;
  margin: ${({ theme: { spacing } }) => `${spacing[10]} auto ${spacing[4]}`};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  ${({ theme: { mediaQ } }) => mediaQ.tablet} {
    padding: ${({ theme: { spacing } }) => `${spacing[5]} ${spacing[6]}`};
    background: ${({ theme: { color } }) => color.white};
    box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  }
`;

export default function Index() {
  return (
    <>
      <Head title="Home" />
      <Container>
        <Wrapper>
          <Hero />
          <Content />
        </Wrapper>
        <Image />
      </Container>
    </>
  );
}
