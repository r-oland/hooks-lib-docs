// Components==============
import { flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const F0F = styled.h1`
   ${flexUnit(2.4, 30, 40, "vw", "font-size")}
`;

const Smiley = styled.p`
   ${flexUnit(2.4, 40, 50, "vw", "font-size")}
   margin: 0;
`;

const LayoutStyle = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   height: "40vh"
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
      <Layout pageStyle="page">
         <Head
            title="404 NOT FOUND"
            description="Could not found the page you where looking for"
            keywords="404, unavailable, not found"
         />
         <Container style={LayoutStyle}>
            <F0F>I could not find what you where looking for.</F0F>
            {/* eslint-disable-next-line */}
            <Smiley>😟</Smiley>
         </Container>
      </Layout>
   );
}
