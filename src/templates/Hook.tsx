// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import PropArgs from "../components/PropArgs";
// =========================

const Wrapper = styled.div`
  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }
`;

export default function Hook({ data }: { data: any }) {
  const name = data.sanityHooks.name;
  const args = data.sanityHooks.arguments;

  return (
    <Wrapper>
      <h3>{name}</h3>
      <PropArgs propArg={args} title="Arguments" />
    </Wrapper>
  );
}

export const query = graphql`
  query hookQuery($hook: String!) {
    sanityHooks(name: { eq: $hook }) {
      name
      arguments {
        argument
        description
        defaultValue
      }
    }
  }
`;
