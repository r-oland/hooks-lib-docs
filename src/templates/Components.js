// Components==============
import { graphql } from "gatsby";
import React from "react";
import Component from "../components/Component";
// =========================

export default function Components({ data }) {
  const comps = data.sanityComponents.componentCollection;

  const components = comps.map((e, index) => {
    const name = e.name;
    const props = e.props;
    const example = e.example;

    return (
      <Component
        key={name}
        name={name}
        props={props}
        example={example.code}
        index={index}
      />
    );
  });

  return components;
}

export const query = graphql`
  query compQuery($comp: String!) {
    sanityComponents(name: { eq: $comp }) {
      componentCollection {
        name
        props {
          prop
          description
          defaultValue
        }
        example {
          code
        }
      }
    }
  }
`;
