// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import { ChildComponents, ChildLibraries } from "./ChildItems";
import FoldButton from "./FoldButton";
import { SingleComponents, SingleLibraries } from "./SingleItems";
// =========================

const Wrapper = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 300px;
  background: ${({ theme: { white } }) => white};
  padding: ${({ theme: { spacing } }) => `0 ${spacing.s5} 0 `};
  overflow-y: scroll;
  z-index: 10;
  h3 {
    margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s5}`};
  }

  #components {
    margin-top: 80px;

    @media screen and (min-width: 800px) {
      margin-top: ${({ theme: { spacing } }) => spacing.s7};
    }
  }
`;

export default function MainNav() {
  const { folded } = useContext(NavContext);
  return (
    <>
      <Wrapper
        variants={{
          open: {
            x: 0,
            opacity: 1,
          },
          closed: {
            x: -300,
            opacity: 0,
          },
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 130,
        }}
        animate={folded === true ? "open" : "closed"}
        initial={false}
      >
        <h3 id="components">Components</h3>
        <ChildComponents />
        <SingleComponents />
        <h3>Libraries</h3>
        <ChildLibraries />
        <SingleLibraries />
      </Wrapper>
      <FoldButton />
    </>
  );
}
