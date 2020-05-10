// Components==============
import * as comp from "components-react-lib";
import React, { useState } from "react";
import JsxParser from "react-jsx-parser";
import styled from "styled-components";
import Example from "./Example";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
    margin-top: ${({ theme: { spacing }, index }) =>
      index !== 0 ? spacing[8] : "0"};
  }
`;

const CompWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  background: ${({ theme: { gray } }) => gray[0]};
  padding: ${({ theme: { spacing } }) => `${spacing[6]} ${spacing[6]}`};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 750px;
`;

export default function Component({ name, props, example, index }) {
  const [exampleCode, setExampleCode] = useState(example);

  return (
    <Wrapper index={index}>
      <h3>{name}</h3>
      <CompWrapper>
        <JsxParser components={comp} jsx={exampleCode} />
      </CompWrapper>
      <Example example={exampleCode} setExampleCode={setExampleCode} />
      <PropArgs propArg={props} title="Props" />
    </Wrapper>
  );
}
