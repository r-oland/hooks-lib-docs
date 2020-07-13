// Components==============
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../components/UnderlineButton";
import Head from "../Layout/Head";
//=========================

const Wrapper = styled.div`
  max-width: 800px; 

  h1{
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }

  
  p {
    ${({ theme: { fontSize } }) => fontSize.l}
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

    span{
    ${({ theme: { fontSize } }) => fontSize.l}
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }

  button{
   ${({ theme: { fontSize } }) => fontSize.l} 
   font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
 
`;

export default function Index() {
  return (
    <>
      <Head title="Home" />
      <Wrapper>
        <h1>Welcome! </h1>
        <p>
          This is my personal react library. At the moment,
          <span>
            {" "}
            the component library is not intended for public usage.
          </span>{" "}
          If you want to use any of the components, I recommend digging in to
          the source code and adjusting the code to fit your project:{" "}
          <a
            href={"https://github.com/r-oland/components-react-lib"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnderlineButton>Github repo</UnderlineButton>
          </a>
        </p>
        <p>
          <span>The hooks are all publicly available</span> by installing the
          following package:{" "}
          <a
            href={"https://www.npmjs.com/package/hooks-lib"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnderlineButton> hooks-lib</UnderlineButton>
          </a>
        </p>
      </Wrapper>
    </>
  );
}
