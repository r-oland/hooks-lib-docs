// Components==============
import { graphql } from "gatsby";
import React from "react";
import Hook from "./Hook";
// =========================

export default function HookTemplate({ data }: { data: any }) {
  const name = data.sanityHooks.name;
  const description = data.sanityHooks.description;
  const args = data.sanityHooks.arguments;

  return <Hook name={name} args={args} description={description} />;
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
        defaultValue
      }
      values {
        value
        description
      }
    }
  }
`;
