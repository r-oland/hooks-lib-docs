// Components==============
import React from "react";
import styled from "styled-components";
import Install from "./Install";
// =========================

const Wrapper = styled.div`
  h2 {
    ${({ theme: { fontSize } }) => fontSize.h4}
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }

  strong {
    display: block;
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    ${({ theme: { fontSize } }) => fontSize.xs}
    color: ${({ theme: { color } }) => color.gray};
  }
`;

const Text = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

const Flex = styled.div`
  ${({ theme: { mediaQ } }) => mediaQ.desktopM} {
    display: flex;
    justify-content: space-between;
  }
`;

export default function Content() {
  return (
    <Wrapper>
      <h2>What's all this about? 🤔</h2>
      <Text>
        <p>
          React custom hooks allow us to abstract components logic into single
          reusable functions. The result of this architecture is a more
          readable, reusable, and durable way of writing React code.
        </p>
        <p>
          Since I found myself copy and pasting a lot of the same logic
          throughout projects, I decided to pull that logic into one central
          location. This is my personal collection of (hopefully) useful React
          hooks that might also help other devs to speed up their development
          process.
        </p>
      </Text>
      <h2>Install</h2>
      <Flex>
        <div>
          <strong>Npm</strong>
          <Install text="npm i hooks-lib" />
        </div>
        <div>
          <strong>Yarn</strong>
          <Install text="yarn add hooks-lib" />
        </div>
      </Flex>
    </Wrapper>
  );
}
