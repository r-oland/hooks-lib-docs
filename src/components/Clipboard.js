// Components==============
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Clip = styled.div`
  cursor: initial;
`;

export default function Clipboard({ children, style, copy }) {
  const query = useMediaQ("max", 1000);
  const chromeMobile =
    typeof window !== "undefined" &&
    window.navigator.userAgent.includes("Chrome") &&
    query;

  return (
    <>
      {chromeMobile ? (
        <div>{children}</div>
      ) : (
        <Clip
          style={style}
          onClick={() => {
            navigator.clipboard.writeText(copy);
          }}
        >
          {children}
        </Clip>
      )}
    </>
  );
}
