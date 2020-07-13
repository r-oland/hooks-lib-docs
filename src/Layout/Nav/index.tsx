// Components==============
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQ, useOnClickOutside } from "hooks-lib";
import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import FoldButton from "./FoldButton";
import Header from "./Header";
import NavItem from "./NavItem";
// =========================

const Wrapper = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 300px;
  background: ${({ theme: { color } }) => color.white};
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

export default function MainNav({ path }: { path: any }) {
  const { setSelected, folded, setFolded } = useContext(NavContext);
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
      allSanityHooks {
        nodes {
          name
        }
      }
    }
  `);

  const hookPath = data.allSanityHooks.nodes || [];

  useEffect(() => {
    hookPath.forEach((e: any) => {
      path.hook === e.name && setSelected(path.hook);
    });
  }, [hookPath, path, setSelected]);

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
        <Header />
        <h3>Hooks</h3>
        <NavItem data={data.allSanityHooks.nodes} />
      </Wrapper>
      <FoldButton />
    </div>
  );
}
