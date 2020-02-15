// Components==============
import { graphql } from "gatsby";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ChatLink from "../Components/ChatLink/ChatLink";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  text-align: center;
`;

const Clip = styled(Clipboard)`
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} 0;
  width: 100%;
`;

export default function Links({ data }) {
  return (
    <Layout>
      <Head title="Links" />
      <Title>Links</Title>
      <Wrapper>
        <Clip copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/ChatLink/ChatLink.js">
          <ChatLink stock={data.file.childImageSharp.fluid} />
        </Clip>
      </Wrapper>
    </Layout>
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
