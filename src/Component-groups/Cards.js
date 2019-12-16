// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import CTACard from "../Components/CTACard";
import CurvedImageCard from "../Components/CurvedImageCard/CurverdImageCard";
import CurvedImageCard2 from "../Components/CurvedImageCard2/CurverdImageCard2";
import SimpleImageCard from "../Components/SimpleImageCard";
import { SimpleShadowCard } from "../Components/SimpleShadowCard";
import WaveCard from "../Components/WaveCard/WaveCard";
// =========================

const Wrapper = styled(Container)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 4em 3em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 4em 0;
`;

const Clip = styled(Container)`
  display: block;
  margin: 0 auto;
  padding-top: 1em;
`;

export default function Cards() {
  const data = useStaticQuery(graphql`
    query CardImage {
      file(relativePath: { eq: "Stock.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <h2>Cards</h2>
      <Grid>
        <div>
          <SimpleShadowCard></SimpleShadowCard>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleShadowCard.js">
            select
          </Clip>
        </div>

        <div>
          <SimpleImageCard
            img={data.file.childImageSharp.fluid}
          ></SimpleImageCard>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleImageCard.js">
            select
          </Clip>
        </div>

        <div>
          <CurvedImageCard
            img={data.file.childImageSharp.fluid}
          ></CurvedImageCard>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard/CurverdImageCard.js">
            select
          </Clip>
        </div>

        <div>
          <WaveCard img={data.file.childImageSharp.fluid}></WaveCard>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/WaveCard/WaveCard.js">
            select
          </Clip>
        </div>

        <div>
          <CurvedImageCard2
            img={data.file.childImageSharp.fluid}
          ></CurvedImageCard2>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard2/CurverdImageCard2.js">
            select
          </Clip>
        </div>

        <div>
          <CTACard cta={"Call to action"}></CTACard>
          <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CTACard.js">
            select
          </Clip>
        </div>
      </Grid>
    </Wrapper>
  );
}
