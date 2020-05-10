// Components==============
import React from "react";
import styled from "styled-components";
import Head from "../Layout/Head";
// =========================

const F0F = styled.h1`
  font-size: 35px;
`;

const Smiley = styled.p`
  font-size: 45px;
`;

const LayoutStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 85%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    max-width: 80%;
  }
`;

export default function notFound() {
  return (
    <>
      <Head title="404" />
      <Container style={LayoutStyle}>
        <F0F>I could not find what you where looking for.</F0F>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container>
    </>
  );
}
