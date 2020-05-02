// Components==============
import React from "react";
import styled from "styled-components";
import FoldFAQ from "../Components/FoldFAQ";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default function Faq() {
  return (
    <>
      <Head title="FAQ" />
      <Title>FAQ</Title>
      <Wrapper>
        <Clipboard
          style={{ textAlign: "left" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FoldFAQ.js"
        >
          <FoldFAQ />
        </Clipboard>
      </Wrapper>
    </>
  );
}
