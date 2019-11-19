// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import CurvedImageCard from "../Components/CurvedImageCard/CurverdImageCard";
import CurvedImageCard2 from "../Components/CurvedImageCard2/CurverdImageCard2";
import SimpleImageCard from "../Components/SimpleImageCard";
import { SimpleShadowCard } from "../Components/SimpleShadowCard";
import WaveCard from "../Components/WaveCard/WaveCard";
import { Container } from "../style/Mixins";
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
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleShadowCard.js">
          <SimpleShadowCard></SimpleShadowCard>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleImageCard.js">
          <SimpleImageCard
            img={data.file.childImageSharp.fluid}
          ></SimpleImageCard>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard/CurverdImageCard.js">
          <CurvedImageCard
            img={data.file.childImageSharp.fluid}
          ></CurvedImageCard>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/WaveCard/WaveCard.js">
          <WaveCard img={data.file.childImageSharp.fluid}></WaveCard>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/CurvedImageCard2/CurverdImageCard2.js">
          <CurvedImageCard2
            img={data.file.childImageSharp.fluid}
          ></CurvedImageCard2>
        </Clipboard>
      </Grid>
    </Wrapper>
  );
}
