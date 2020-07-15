import React from "react";
import styled from "styled-components";
import { ContentWrapper, PlayGroundWrapper } from "./components/PageWrappers";
import Layout from "./Layout/Layout";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    display: flex;
  }
`;

export type pageProps = { element?: React.ReactNode; props?: any };

const page = ({ element, props }: pageProps) => {
  // you can add custom transitions by conditionally checking the props.path value

  return (
    <Layout {...props}>
      <Wrapper>
        <ContentWrapper element={element} props={props} />
        {props.path.includes("use") && <PlayGroundWrapper props={props} />}
      </Wrapper>
    </Layout>
  );
};

export default page;
