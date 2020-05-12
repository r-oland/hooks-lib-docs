// Components==============
import Prism from "prismjs";
import React, { useEffect } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  max-width: 750px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};

  span {
    font-size: 1em;
  }

  #pre {
    position: relative;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted .token.boolean,
  .token.number,
  .token.function {
    color: ${({ theme: { primary } }) => primary[3]};
  }
`;

const Textarea = styled.textarea`
  height: calc(100% - 1em);
  width: calc(100% - 1em);
  top: 1em;
  left: 1em;
  position: absolute;
  margin: 0;
  border: none;
  background: transparent;
  color: #f8f8f2;
  -webkit-text-fill-color: transparent;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  line-height: 1.5;
  resize: none;
  white-space: pre;
  overflow: hidden;
`;

export default function Example({ example, setExampleCode }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [example]);

  const handleKeyDown = (evt) => {
    if (evt.key === "Tab") {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      <pre id="pre" style={{ whiteSpace: "pre-wrap" }}>
        {setExampleCode && (
          <Textarea
            defaultValue={example}
            onChange={(e) => {
              setExampleCode(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            spellCheck="false"
          />
        )}
        <code className="language-jsx" id="code">
          {example}
        </code>
      </pre>
    </Wrapper>
  );
}
