// Components==============
import { graphql } from "gatsby";
import React from "react";
import Hook from "../components/Hook";
// =========================

export default function Hooks({ data }) {
  const name = data.sanityHooks.name;
  const args = data.sanityHooks.arguments;
  const example = data.sanityHooks.example.code;

  return <Hook name={name} args={args} example={example} />;
}

export const query = graphql`
  query hookQuery($hook: String!) {
    sanityHooks(name: { eq: $hook }) {
      name
      arguments {
        argument
        description
      }
      example {
        code
      }
    }
  }
`;
