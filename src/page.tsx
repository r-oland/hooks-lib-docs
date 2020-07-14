import React from "react";
import { ContentWrapper, PlayGroundWrapper } from "./components/PageWrappers";
import Layout from "./Layout/Layout";

export type pageProps = { element?: React.ReactNode; props?: any };

const page = ({ element, props }: pageProps) => {
  // you can add custom transitions by conditionally checking the props.path value

  return (
    <Layout {...props}>
      <ContentWrapper element={element} props={props} />
      {props.path.includes("use") && <PlayGroundWrapper props={props} />}
    </Layout>
  );
};

export default page;
