// Components==============
import React from "react";
import styled from "styled-components";
import BasicNavigation from "../Components/BasicNavigation";
import BasicNavigationOnScroll from "../Components/BasicNavigationOnScroll";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  min-height: 110vh;
  overflow: hidden;
`;

const Margin = styled.div`
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

const Scroll = styled.h3`
  margin-top: ${({ theme: { spacing } }) => spacing.s6};
  text-align: center;
`;

export default function Navigation() {
  return (
    <>
      <Head title="Navigation" />
      <Title>Navigation</Title>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigation.js">
          <Margin>
            <BasicNavigation />
          </Margin>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationOnScroll.js">
          <Margin>
            <BasicNavigationOnScroll />
          </Margin>
        </Clipboard>
        <Scroll>Scroll!</Scroll>
      </Wrapper>
    </>
  );
}
