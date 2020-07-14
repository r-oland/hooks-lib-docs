// Components==============
import React from "react";
import styled from "styled-components";
import PropArgs from "./PropArgs";

// =========================

const Wrapper = styled.div`
  padding: 5em 2.5em;

  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

type props = { name: string; description: string; args: any };

export default function Hook({ name, description, args }: props) {
  return (
    <Wrapper>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <PropArgs propArg={args} title="Arguments" />
    </Wrapper>
  );
}
