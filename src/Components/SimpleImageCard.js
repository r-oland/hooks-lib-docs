// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.2);
  width: 100%;
  height: 500px;
  margin: 0 auto;
`;

const Image = styled(Img)`
  border-radius: 15px 15px 0 0;
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
