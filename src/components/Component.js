// Components==============
import * as comp from "components-react-lib";
import React, { useState } from "react";
import JsxParser from "react-jsx-parser";
import styled from "styled-components";
import NavItems from "../Gatsby/NavItems";
import Example from "./Example";
import Logo from "./Logo";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  .jsx-parser {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.h3`
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  margin-top: ${({ theme: { spacing }, index }) =>
    index !== 0 ? spacing[8] : "0"};
`;

const CompWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  background: ${({ theme: { gray } }) => gray[0]};
  padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[6]}`};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  max-width: ${({ fullWidth }) => (fullWidth ? "initial" : "750px")};
`;

export default function Component({ name, props, example, index, fullWidth }) {
  const [exampleCode, setExampleCode] = useState(example);

  return (
    <Wrapper>
      <Title index={index}>{name}</Title>
      <CompWrapper fullWidth={fullWidth}>
        <JsxParser components={{ ...comp, NavItems, Logo }} jsx={exampleCode} />
      </CompWrapper>

      <Example
        example={exampleCode}
        setExampleCode={setExampleCode}
        fullWidth={fullWidth}
      />
      <PropArgs propArg={props} title="Props" fullWidth={fullWidth} />
    </Wrapper>
  );
}
