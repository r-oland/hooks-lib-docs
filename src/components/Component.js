// Components==============
import gatsby from "assets/Gatsby.svg";
import react from "assets/React.svg";
import * as comp from "components-react-lib";
import React, { useState } from "react";
import JsxParser from "react-jsx-parser";
import styled, { css } from "styled-components";
import navItems from "../bindings/navItems";
import Example from "./Example";
import Logo from "./Logo";
import PropArgs from "./PropArgs";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing }, displayMode }) =>
    displayMode.includes("marginTop") && spacing[9]};
`;

const TitleWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  margin-top: ${({ theme: { spacing }, index }) =>
    index === 0 ? "" : spacing[7]};
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-right: ${({ theme: { spacing } }) => spacing[0]};
`;

const Icon = styled.img`
  width: 22px;
`;

const normal = css`
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  background: ${({ theme: { gray } }) => gray[0]};
  padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[6]}`};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  max-width: 750px;
  display: flex;
  justify-content: center;
`;

const fullWidth = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const CompWrapper = styled.div`
  ${({ displayMode }) =>
    displayMode.includes("fullWidth") ? fullWidth : normal}
`;

export default function Component({
  name,
  props,
  example,
  index,
  displayMode,
  bindings,
  dependencies,
}) {
  const [exampleCode, setExampleCode] = useState(example);

  displayMode = displayMode || " ";

  const icon = dependencies === "Gatsby" ? gatsby : react;

  return (
    <Wrapper displayMode={displayMode}>
      <TitleWrapper index={index}>
        <Title>{name}</Title>
        <Icon src={icon} alt={icon} />
      </TitleWrapper>
      <CompWrapper displayMode={displayMode}>
        <JsxParser
          renderInWrapper={false}
          bindings={{ navItems }}
          components={{ ...comp, Logo }}
          jsx={exampleCode}
        />
      </CompWrapper>
      <Example example={exampleCode} setExampleCode={setExampleCode} />
      <PropArgs propArg={props} title="Props" />
      {bindings && <Example example={bindings.code}></Example>}
    </Wrapper>
  );
}
