// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import CurveImp from "./Curve.inline.svg";

// =========================

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.2);
  width: 100%;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
`;

const Image = styled(Img)`
  height: 45%;
`;

const CurveSvg = styled(CurveImp)`
  position: absolute;
  right: 0;
  transform: translateY(-50%) scale(1, 1);

  #changeColor {
    fill: ${({ theme }) => theme.white};
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export default function CurvedImageCard({ img, children }) {
  return (
    <Card>
      <Image fluid={img} alt="StockImg" />
      <CurveSvg />
      <Content>{children}</Content>
    </Card>
  );
}

/* <CurvedImageCard img={data.file.childImageSharp.fluid}></CurvedImageCard> */
