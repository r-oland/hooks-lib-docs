// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Card = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  width: 100%;
  height: 400px;
  margin: 0 auto;
`;

const Image = styled(Img)`
  height: 45%;
`;

export default function SimpleImageCard({ img, children }) {
  return (
    <Card>
      <Image fluid={img} alt="StockImg" />
      {children}
    </Card>
  );
}

/* <SimpleImageCard img={data.file.childImageSharp.fluid}></SimpleImageCard> */
