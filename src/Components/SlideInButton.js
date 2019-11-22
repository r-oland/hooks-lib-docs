// Components==============
// =========================
// Components==============
import { flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const ButtonWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  display: inline-block;
  border-radius: 2px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 0.1fr 1fr;

  &:hover {
    .slider {
      width: 1100%;
    }

    .content {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Slider = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  grid-row: 1;
  transition: 1s;
`;

const Content = styled.p`
  ${flexUnit(2, 16, 18, "vw", "font-size")}
  font-weight: 400;
  margin: 0;
  padding: 0.6em 2.5em 0.6em 0.75em;
  grid-row: 1;
  justify-self: flex-start;
  transition: 0.3s;
`;

export default function SlideInButton({ children }) {
  return (
    <ButtonWrapper>
      <Grid>
        <Slider className="slider" />
        <Content className="content">{children}</Content>
      </Grid>
    </ButtonWrapper>
  );
}
