// Components==============
import Icon from "assets/Icon.svg";
import { motion } from "framer-motion";
import { flexUnit } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  text-align: center;
  justify-items: center;
`;

const Text = styled.div`
  align-self: center;
  margin: 0 ${({ theme: { spacing } }) => spacing.s3};
`;

const Title = styled.p`
  ${flexUnit(2, 20, 30, "vw", "font-size")};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  font-weight: 700;
`;

const SVGWrap = styled(motion.div)`
  align-self: start;
`;

const IconSVG = styled.img`
  width: calc(75px + 20vw);
`;

export default function Index() {
  return (
    <Layout>
      <Head title="Home" />
      <Wrapper>
        <Text>
          <Title>This is my personal component library.</Title>
          <p>Please ignore the select buttons, they are for personal usage. </p>
        </Text>
        <SVGWrap
          drag
          dragConstraints={{ left: -70, right: 70, top: -70, bottom: 70 }}
        >
          <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components">
            <IconSVG src={Icon} alt="Icon" />
          </Clipboard>
        </SVGWrap>
      </Wrapper>
    </Layout>
  );
}
