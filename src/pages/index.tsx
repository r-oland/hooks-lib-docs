// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Content from "../components/home/Content";
import Hero from "../components/home/Hero";
import Image from "../components/home/Image";
import Head from "../Layout/Head";
import { Container } from "../style/Mixins";
//=========================

const Wrapper = styled(motion.div)`
  max-width: 750px;
  margin: ${({ theme: { spacing } }) => `${spacing[10]} auto `};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};

  ${({ theme: { mediaQ } }) => mediaQ.tablet} {
    padding: ${({ theme: { spacing } }) => `${spacing[5]} ${spacing[8]}`};
    background: ${({ theme: { color } }) => color.white};
    box-shadow: ${({ theme: { shadow } }) => shadow.xs};
  }
`;

export default function Index() {
  return (
    <>
      <Head title="Home" />
      <Container>
        <Wrapper animate="mount" initial="initial" variants={parent}>
          <motion.div variants={child}>
            <Hero />
          </motion.div>
          <motion.div variants={child}>
            <Content />
          </motion.div>
          <motion.div variants={child}>
            <Image />
          </motion.div>
        </Wrapper>
      </Container>
    </>
  );
}

const parent = {
  mount: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },

  initial: {
    opacity: 0,
  },
};

const child = {
  mount: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
};
