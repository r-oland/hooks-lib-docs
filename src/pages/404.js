// Componenets==============
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
import { Container } from "../global-ui-components/Container";
// =========================

export default function notFound() {
   return (
      <Layout>
         <Head
            title="404 NOT FOUND"
            description="Could not found the page you where looking for"
            keywords="404, unavailible"
         />
         <Container>
            <h1>I'm realy sorry</h1>
            <h4>couldn't find what you were looking for..</h4>
         </Container>
      </Layout>
   );
}
