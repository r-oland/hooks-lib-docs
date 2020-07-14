// Components==============
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQ, useOnClickOutside } from "hooks-lib";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../Layout";
import FoldButton from "./FoldButton";
import Header from "./Header";
import NavItem from "./NavItem";
// =========================

type Wrapper = {
  folded: boolean;
};

const Wrapper = styled(motion.div)<Wrapper>`
  height: 100%;
  background: ${({ theme: { color } }) => color.white};
  padding: ${({ theme: { spacing }, folded }) =>
    folded ? `0 ${spacing[4]} 0 ` : 0};
  overflow-y: scroll;
  z-index: 10;
`;

const Title = styled.h4`
  margin: ${({ theme: { spacing } }) => `${spacing[6]} 0 ${spacing[1]}`};
`;

export default function Nav() {
  const { folded, setFolded } = useContext(AppContext);
  const smallScreen = useMediaQ("max", 600);

  const ref = useRef(null!);
  useOnClickOutside(
    ref,
    () => {
      setFolded(false);
    },
    folded && smallScreen
  );

  const data = useStaticQuery(graphql`
    query navQuery {
      allSanityHooks(sort: { fields: name, order: ASC }) {
        nodes {
          name
        }
      }
    }
  `);

  return (
    <div ref={ref}>
      <Wrapper
        variants={{
          open: {
            x: 0,
            opacity: 1,
            width: 225,
          },
          closed: {
            x: -225,
            opacity: 0,
            width: 0,
          },
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 130,
        }}
        animate={folded ? "open" : "closed"}
        initial="open"
        folded={folded}
      >
        <Header />
        <Title>Hooks</Title>
        <NavItem data={data.allSanityHooks.nodes} />
      </Wrapper>
      <FoldButton />
    </div>
  );
}
