// Components==============
import React from "react";
import styled from "styled-components";
import BasicMap from "../Components/BasicMap";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

export default function Maps() {
  return (
    <>
      <Head title="Maps" />
      <Title>Maps</Title>
      <Wrapper>
        <Clipboard
          style={{ width: `100%` }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicMap.js"
        >
          <BasicMap />
        </Clipboard>
      </Wrapper>
    </>
  );
}
