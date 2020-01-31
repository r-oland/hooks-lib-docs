// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ChatLink from "../Components/ChatLink/ChatLink";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled(Container)`
  text-align: center;

  h2 {
    margin-top: ${({ theme: { spacing } }) => spacing.s4};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
  }
`;

const Clip = styled(Clipboard)`
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} 0;
`;

export default function Links() {
  const data = useStaticQuery(graphql`
    query CardImage2 {
      file(relativePath: { eq: "Stock.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <h2>Link elements</h2>
      <ChatLink stock={data.file.childImageSharp.fluid} />
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/ChatLink.js">
        select
      </Clip>
    </Wrapper>
  );
}
