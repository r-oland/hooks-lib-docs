// Components==============
import React from "react";
import styled from "styled-components";
import CollapseCard from "../Components/CollapseCard/CollapseCard";
import CollapseCard2 from "../Components/CollapseCard2/CollapseCard2";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
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

const Margin = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 1em;
`;

const Wrapper = styled(Container)``;

export default function Collapse() {
  return (
    <>
      <Head title="Collapse" />
      <Title>Collapse</Title>
      <Wrapper>
        <Elements>
          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard/CollapseCard.js">
            <Margin>
              <CollapseCard initial={"This could be a question"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                ea ratione libero non. Laudantium rerum numquam quo tenetur,
                nihil, sit, ullam incidunt illo repudiandae voluptates placeat
                earum error at quod pariatur sed quia. Laudantium sequi et
                commodi laborum itaque quaerat.
              </CollapseCard>
            </Margin>
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CollapseCard2/CollapseCard2.js">
            <Margin>
              <CollapseCard2 initial={"This could be a question"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                ea ratione libero non. Laudantium rerum numquam quo tenetur,
                nihil, sit, ullam incidunt illo repudiandae voluptates placeat
                earum error at quod pariatur sed quia. Laudantium sequi et
                commodi laborum itaque quaerat.
              </CollapseCard2>
            </Margin>
          </Clipboard>
        </Elements>
      </Wrapper>
    </>
  );
}
