// Components==============
import * as comp from "components-react-lib";
import React from "react";
import styled from "styled-components";
import Example from "./Example";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  h3 {
    margin: ${({ theme: { spacing }, index }) =>
      index === 0 ? `0 0 ${spacing[1]} ` : `${spacing[4]} 0 ${spacing[1]} `};
  }
`;

export default function Component({ name, props, example, index }) {
  const Comp = comp[name];

  return (
    <Wrapper index={index}>
      <h3>{name}</h3>
      <Comp />
      <PropArgs propArg={props} title="Props" />
      <Example example={example} />
    </Wrapper>
  );
}
