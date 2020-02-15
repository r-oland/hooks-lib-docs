// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import CTACard from "../Components/CTACard";
import CurvedImageCard from "../Components/CurvedImageCard/CurverdImageCard";
import CurvedImageCard2 from "../Components/CurvedImageCard2/CurverdImageCard2";
import SimpleImageCard from "../Components/SimpleImageCard";
import { SimpleShadowCard } from "../Components/SimpleShadowCard";
import WaveCard from "../Components/WaveCard/WaveCard";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
import { Container } from "../style/Mixins";

// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)``;

const Grid = styled.div`
  display: grid;
  grid-gap: 4em 3em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 4em 0;
`;

export default function Cards({ data }) {
  return (
    <Layout>
      <Head title="Cards" />
      <Title>Cards</Title>
      <Wrapper>
        <Grid>
          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleShadowCard.js">
            <SimpleShadowCard />
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleImageCard.js">
            <SimpleImageCard img={data.file.childImageSharp.fluid} />
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard/CurverdImageCard.js">
            <CurvedImageCard img={data.file.childImageSharp.fluid} />
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/WaveCard/WaveCard.js">
            <WaveCard img={data.file.childImageSharp.fluid} />
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard2/CurverdImageCard2.js">
            <CurvedImageCard2 img={data.file.childImageSharp.fluid} />
          </Clipboard>

          <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CTACard.js">
            <CTACard cta={"Call to action"} />
          </Clipboard>
        </Grid>
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query CardImage5 {
    file(relativePath: { eq: "Stock.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
