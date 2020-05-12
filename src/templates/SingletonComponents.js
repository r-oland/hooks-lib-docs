// Components==============
import { graphql } from "gatsby";
import React from "react";
import Component from "../components/Component";
// =========================

export default function SingletonComponents({ data, pageContext }) {
  const comps = data.sanityComponents.componentCollection.filter(
    (e) => e.name === pageContext.comp && e
  );

  const components = comps.map((e, index) => {
    const name = e.name;
    const props = e.props;
    const example = e.example.code;
    const displayMode = e.displayMode;
    const bindings = e.bindings;
    const dependencies = e.dependencies;

    return (
      <Component
        key={name}
        name={name}
        props={props}
        example={example}
        index={index}
        displayMode={displayMode}
        bindings={bindings}
        dependencies={dependencies}
      />
    );
  });

  return components;
}

export const query = graphql`
  query singleCompQuery($group: String!) {
    sanityComponents(name: { eq: $group }) {
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
        bindings {
          code
        }
        displayMode
        dependencies
      }
    }
  }
`;
