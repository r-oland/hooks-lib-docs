// Components==============
import Icon from "assets/Icon.svg";
import { motion } from "framer-motion";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

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

export default function Index() {
  return (
    <Layout>
      <Head title="Home" />
      <Flex>
        <motion.div
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        >
          <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components">
            <IconSVG src={Icon} alt="Icon" />
          </Clipboard>
        </motion.div>
      </Flex>
    </Layout>
  );
}
