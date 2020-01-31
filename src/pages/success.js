// Components==============
import React from "react";
import Layout from "../Layout/Layout";

export default function success() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <h2>Your submission was a success!</h2>;
      </div>
    </Layout>
  );
}
