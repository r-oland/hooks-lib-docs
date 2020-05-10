// Components==============
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQ, useOnClickOutside } from "hooks-lib";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import FoldButton from "./FoldButton";
import Logo from "./Logo";
import NavItem from "./NavItem";
// =========================

const Wrapper = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 300px;
  background: ${({ theme: { gray } }) => gray[0]};
  padding: ${({ theme: { spacing } }) => `0 ${spacing[4]} 0 `};
  overflow-y: scroll;
  z-index: 10;
  h3 {
    margin: ${({ theme: { spacing } }) => `${spacing[6]} 0 ${spacing[1]}`};
  }

  #components {
    @media screen and (min-width: 1000px) {
      margin-top: ${({ theme: { spacing } }) => spacing[5]};
    }
  }
`;

export default function MainNav() {
  const { folded, setFolded } = useContext(NavContext);
  const smallScreen = useMediaQ("max", 600);

  const ref = useRef();
  useOnClickOutside(
    ref,
    () => {
      setFolded(false);
    },
    folded && smallScreen
  );

  const data = useStaticQuery(graphql`
    query navQuery {
      allSanityHooks {
        nodes {
          name
        }
      }
      allSanityComponents {
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
        animate={folded ? "open" : "closed"}
        initial={false}
      >
        <Logo />
        <h3 id="components">Components</h3>
        <NavItem data={data.allSanityComponents.nodes} />
        <h3>Hooks</h3>
        <NavItem data={data.allSanityHooks.nodes} />
      </Wrapper>
      <FoldButton />
    </div>
  );
}
