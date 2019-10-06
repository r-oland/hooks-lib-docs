// Componenets==============
import React from "react";
import Head from "../global-layout-components/Layout/Head";
import Layout from "../global-layout-components/Layout/Layout";
// =========================

export default function index() {
   return (
      <Layout pageStyle="home">
         <Head
            title="Home"
            description="Page description goes here"
            keywords="content"
         />
      </Layout>
   );
}
