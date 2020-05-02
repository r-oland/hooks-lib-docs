// Components==============
import React from "react";
import Head from "../Layout/Head";

export default function Success() {
  return (
    <>
      <Head title="Success" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h2>Your submission was a success!</h2>;
      </div>
    </>
  );
}
