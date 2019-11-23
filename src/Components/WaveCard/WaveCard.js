// Components==============
import React from "react";
import styled from "styled-components";
import Wave from "./Wave.svg";
// =========================

const Card = styled.div`
  background-color: ${({ theme: { primary } }) => primary.s4};
  position: relative;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  max-width: ${({ theme: { spacing } }) => spacing.s14};
  height: ${({ theme: { spacing } }) => spacing.s14};
  margin: 0 auto;
  overflow: hidden;
`;

const WaveSVG = styled.img`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
`;

export default function WaveCard() {
  return (
    <Card>
      <WaveSVG src={Wave} alt="Wave" />
    </Card>
  );
}
