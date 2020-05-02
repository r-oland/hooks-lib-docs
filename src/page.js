import React from "react";
import Layout from "./Layout/Layout";

const page = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default page;
