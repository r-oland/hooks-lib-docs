// Components==============
import Icon from "assets/Icon.svg";
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import TransitionEffect from "../Components/TransitionEffect";
import Layout from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  width: ${({ isFoldedOut }) =>
    isFoldedOut === true ? `calc(100vw - 350px)` : `100vw`};
  transform: ${({ isFoldedOut }) =>
    isFoldedOut === true ? `translateX(350px)` : `translateX(0)`};
  transition: 1s;
  min-height: 100vh;
  padding-top: 0.65em;

  opacity: ${({ isFoldedOut }) => (isFoldedOut === true ? `0` : `1`)};

  @media screen and (min-width: 650px) {
    opacity: 1;
  }
`;

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconSVG = styled.img`
  width: 25vw;
`;

export default function Index({ mount }) {
  const [isFoldedOut, setIsFoldedOut] = useState(true);
  const [category, setCategory] = useState(
    <Flex>
      <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components">
        <IconSVG src={Icon} alt="Icon" />
      </Clipboard>
    </Flex>
  );

  return (
    <Layout
      category={category}
      setCategory={setCategory}
      isFoldedOut={isFoldedOut}
      setIsFoldedOut={setIsFoldedOut}
    >
      <TransitionEffect>
        <Wrapper isFoldedOut={isFoldedOut}>{category}</Wrapper>;
      </TransitionEffect>
    </Layout>
  );
}
