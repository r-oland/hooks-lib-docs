// Components==============
import Icon from "assets/Icon.svg";
import { motion } from "framer-motion";
import { flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { L } from "../style/Mixins";
//=========================

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: fit-content(400px) 1fr;
  text-align: center;
  justify-items: center;
`;

const Text = styled.div`
  align-self: center;
  max-width: 700px;
  margin: ${({ theme: { spacing } }) => `${spacing.s9} ${spacing.s4} 0`};
`;

const Title = styled.p`
  ${flexUnit(2, 20, 30, "vw", "font-size")};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  font-weight: 700;
`;

const Story = styled(L)`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
`;

const IconSVG = styled(motion.img)`
  width: calc(100px + 17.5vw);
  cursor: grab;
`;

export default function Index() {
  return (
    <>
      <Head title="Home" />
      <Wrapper>
        <Text>
          <Title>Welcome to my personal component library!</Title>
          <Story color="navy">
            This is a small app that serves as a storage place for some of the
            reusable React components I build.
          </Story>
        </Text>
        <Clipboard
          style={{ alignSelf: "center" }}
          copy="vscode://file/d:/Freelancing/Code/Real projects/Components"
        >
          <button>
            <IconSVG
              src={Icon}
              alt="Icon"
              drag
              dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100,
              }}
            />
          </button>
        </Clipboard>
      </Wrapper>
    </>
  );
}
