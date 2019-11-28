// Components==============
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Container } from "mixins";
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import Carousel1 from "../Components/Carousel1/Carousel1";
import Slide1 from "../Components/Carousel2/Slide1";
import Slide2 from "../Components/Carousel2/Slide2";
import { SimpleButton } from "../Components/SimpleButton";

// =========================

const Wrapper = styled(Container)`
  text-align: center;
`;

const CopyButton = styled(SimpleButton)`
  margin: ${({ theme: { spacing } }) => `${spacing.s8}`} 0;
`;

const SlideImage = styled(Img)`
  height: 250px;

  @media screen and (min-width: 400px) {
    height: 300px;
  }

  @media screen and (min-width: 500px) {
    height: 400px;
  }

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

const SlideImage2 = styled(Img)`
  height: 250px;
  @media screen and (min-width: 400px) {
    height: 500px;
  }
`;

const SlideImage3 = styled(Img)`
  height: 100px;

  @media screen and (min-width: 400px) {
    height: 250px;
  }
`;

export default function Carousel() {
  const data = useStaticQuery(graphql`
    query CarouselImage {
      Stock1: file(relativePath: { eq: "Stock.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Stock2: file(relativePath: { eq: "Stock2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Stock3: file(relativePath: { eq: "Stock3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Stock4: file(relativePath: { eq: "Stock4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const Image1 = data.Stock1.childImageSharp.fluid;
  const Image2 = data.Stock2.childImageSharp.fluid;
  const Image3 = data.Stock3.childImageSharp.fluid;
  const Image4 = data.Stock4.childImageSharp.fluid;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return (
    <Wrapper>
      <h2>Carousel</h2>
      <Carousel1>
        <SlideImage fluid={Image1} alt="dog1" />
        <SlideImage fluid={Image2} alt="dog2" />
        <SlideImage fluid={Image3} alt="dog3" />
        <SlideImage fluid={Image4} alt="dog4" />
      </Carousel1>

      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Carousel1/Carousel1.js">
        <CopyButton>select</CopyButton>
      </Clipboard>

      <Slide1 setNav1={setNav1} nav2={nav2}>
        <SlideImage2 fluid={Image1} alt="dog1" />
        <SlideImage2 fluid={Image2} alt="dog2" />
        <SlideImage2 fluid={Image3} alt="dog3" />
        <SlideImage2 fluid={Image4} alt="dog4" />
      </Slide1>
      <Slide2 setNav2={setNav2} nav1={nav1}>
        <SlideImage3 fluid={Image1} alt="dog1" />
        <SlideImage3 fluid={Image2} alt="dog2" />
        <SlideImage3 fluid={Image3} alt="dog3" />
        <SlideImage3 fluid={Image4} alt="dog4" />
      </Slide2>

      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/Carousel2/Slide1.js">
        <CopyButton>select</CopyButton>
      </Clipboard>
    </Wrapper>
  );
}