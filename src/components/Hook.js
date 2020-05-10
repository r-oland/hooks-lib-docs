// Components==============
import React from "react";
import styled from "styled-components";
import Example from "./Example";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }
`;

export default function Hook({ name, args, example }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <Example example={example} />
      <PropArgs propArg={args} title="Arguments" />
    </Wrapper>
  );
}
