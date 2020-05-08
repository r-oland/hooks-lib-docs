// Components==============
import React from "react";
import styled from "styled-components";
import Example from "./Example";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  h3 {
    margin: ${({ theme: { spacing } }) => ` 0 0 ${spacing[1]} `};
  }
`;

export default function Hook({ name, args, example }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <PropArgs propArg={args} title="Arguments" />
      <Example example={example} />
    </Wrapper>
  );
}
