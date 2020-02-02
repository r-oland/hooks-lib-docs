// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import CollapseCard from "../Components/CollapseCard/CollapseCard";
import CollapseCard2 from "../Components/CollapseCard2/CollapseCard2";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Elements = styled.div`
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Margin = styled(Clipboard)`
  display: block;
  margin: 0 auto 3em;
  padding-top: 1em;
`;

const Wrapper = styled.div``;

export default function Collapse() {
  return (
    <Layout>
      <Head title="Collapse" />
      <Title>Collapse</Title>
      <Wrapper>
        <Elements>
          <CollapseCard initial={"This could be a question as a example?"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
            ratione libero non. Laudantium rerum numquam quo tenetur, nihil,
            sit, ullam incidunt illo repudiandae voluptates placeat earum error
            at quod pariatur sed quia. Laudantium sequi et commodi laborum
            itaque quaerat.
          </CollapseCard>
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard/CollapseCard.js">
            select
          </Margin>

          <CollapseCard2 initial={"This could be a question as a example?"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
            ratione libero non. Laudantium rerum numquam quo tenetur, nihil,
            sit, ullam incidunt illo repudiandae voluptates placeat earum error
            at quod pariatur sed quia. Laudantium sequi et commodi laborum
            itaque quaerat.
          </CollapseCard2>
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard2/CollapseCard2.js">
            select
          </Margin>
        </Elements>
      </Wrapper>
    </Layout>
  );
}
