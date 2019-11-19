// Components==============
import React from "react";
import styled from "styled-components";
import Wave from "./Wave.svg";
// =========================

const Card = styled.div`
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 4px 11px rgba(112, 112, 112, 0.2);
  width: 100%;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
`;

const WaveSVG = styled.img`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  transform: scale(1.1);
`;

export default function WaveCard() {
  return (
    <Card>
      <WaveSVG src={Wave} alt="Wave" />
    </Card>
  );
}
