// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../components/UnderlineButton";
import Items from "./Items";
// =========================

const Wrapper = styled.div`
  padding: 5em 2em;

  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }
`;

const Description = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Divider = styled.div`
  height: 1.2px;
  background: black;
  opacity: 0.1;
  width: 100%;
  margin: 0 auto ${({ theme: { spacing } }) => spacing[4]};
`;

export default function HookTemplate({ data }: { data: any }) {
  const name = data.sanityHooks.name;
  const description = data.sanityHooks.description;
  const args = data.sanityHooks.arguments;
  const values = data.sanityHooks.values;

  return (
    <Wrapper>
      <UnderlineButton as="h3">{name}</UnderlineButton>
      <Description>{description}</Description>
      {values?.length !== 0 && <Divider />}
      {values.length !== 0 && <Items content={values} title="Values" />}
      {args?.length !== 0 && <Divider />}
      {args.length !== 0 && <Items content={args} title="Arguments" />}
    </Wrapper>
  );
}

export const query = graphql`
  query hookQuery($hook: String!) {
    sanityHooks(name: { eq: $hook }) {
      name
      description
      sandbox
      arguments {
        argument
        description
      }
      values {
        value
        description
      }
    }
  }
`;
