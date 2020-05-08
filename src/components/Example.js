// Components==============
import Prism from "prismjs";
import React, { useEffect } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  max-width: 750px;
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function Example({ example }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Wrapper>
      <pre>
        <code className="language-jsx">{example}</code>
      </pre>
    </Wrapper>
  );
}
