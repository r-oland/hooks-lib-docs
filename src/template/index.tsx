// Components==============
import { motion } from "framer-motion";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../components/UnderlineButton";
import Items from "./Items";
import NextHook from "./NextHook";
// =========================

const Wrapper = styled(motion.div)`
  padding: 5em 2em 2em;

  h3 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    word-break: break-all;
  }
`;

const Description = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Divider = styled.div`
  height: 1.2px;
  background: black;
  opacity: 0.1;
  width: 100%;
  margin: 0 auto ${({ theme: { spacing } }) => spacing[4]};
`;

export default function HookTemplate({ data }: { data: any }) {
  const name = data.sanityHooks.name;
  const description = data.sanityHooks.description;
  const args = data.sanityHooks.arguments;
  const values = data.sanityHooks.values;
  const allHooks = data.allSanityHooks.nodes;

  return (
    <Wrapper animate="mount" initial="initial" variants={parent}>
      <motion.div variants={child}>
        <UnderlineButton as="h3">{name}</UnderlineButton>
      </motion.div>

      <motion.div variants={child}>
        <Description>{description}</Description>
      </motion.div>
      <motion.div variants={child}>
        {values?.length !== 0 && <Divider />}
        {values.length !== 0 && <Items content={values} title="Values" />}
      </motion.div>
      <motion.div variants={child}>
        {args?.length !== 0 && <Divider />}
        {args.length !== 0 && <Items content={args} title="Arguments" />}
      </motion.div>
      <motion.div variants={child}>
        <NextHook allHooks={allHooks} currentName={name} />
      </motion.div>
    </Wrapper>
  );
}

export const query = graphql`
  query hookQuery($hook: String!) {
    allSanityHooks(sort: { order: ASC, fields: name }) {
      nodes {
        name
      }
    }
    sanityHooks(name: { eq: $hook }) {
      name
      description
      sandbox
      arguments {
        argument
        description
      }
      values {
        value
        description
      }
    }
  }
`;

const parent = {
  mount: { transition: { staggerChildren: 0.25 } },
  initial: {},
};

const child = {
  mount: { opacity: 1 },
  initial: { opacity: 0 },
};
