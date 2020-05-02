// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ChatLink from "../Components/ChatLink/ChatLink";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  text-align: center;
`;

export default function Links({ data }) {
  return (
    <>
      <Head title="Links" />
      <Title>Links</Title>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/ChatLink/ChatLink.js">
          <ChatLink stock={data.file.childImageSharp.fluid} />
        </Clipboard>
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query CardImage2 {
    file(relativePath: { eq: "Stock.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
