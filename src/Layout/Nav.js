// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import TLink from "../Components/TLink";
import { ChildComp, ChildLib, singleComp, singleLib } from "../Data/NavData";
import { NavContext } from "./Layout";
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
`;

const LWrap = styled(motion.div)`
  padding-left: ${({ theme: { spacing } }) => spacing.s4};

  a {
    font-size: 15px;
    line-height: 1.8;
  }
`;

const ChildrenWrapper = styled.div`
  padding: ${({ theme: { spacing } }) => `${spacing.s1} 0 ${spacing.s4}`};
`;

const NWrap = styled.div``;

const Inline = styled(motion.p)`
  cursor: pointer;
  display: inline-block;
`;

const Main = styled.div`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
`;

const foldVariants = {
  open: {
    height: "auto",
    opacity: 1,
    visibility: "visible"
  },
  closed: {
    height: 0,
    opacity: 0,
    visibility: "hidden"
  }
};

export default function Nav2() {
  const { folded, setFolded, selected, setSelected } = useContext(NavContext);

  const ChildComponents = ChildComp.map((edge, index) => {
    const name = edge.cat;

    const children = edge.children.map(edge => {
      const subName = edge.name;
      const link = edge.link;

      return (
        <LWrap
          key={link}
          variants={foldVariants}
          animate={selected === name ? "open" : "closed"}
          initial={false}
        >
          <TLink to={`/${link}`}>{subName}</TLink>
        </LWrap>
      );
    });

    return (
      <div key={index}>
        <NWrap>
          <Inline
            onClick={() => {
              selected === name ? setSelected(null) : setSelected(name);
            }}
          >
            {name}
          </Inline>
        </NWrap>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </div>
    );
  });

  const SingleComponents = singleComp.map(edge => {
    const name = edge.name;
    const link = edge.link;
    return (
      <Main key={link}>
        <TLink to={`/${link}`}>
          <div
            onClick={() => {
              setSelected(null);
            }}
          >
            {name}
          </div>
        </TLink>
      </Main>
    );
  });

  const ChildLibraries = ChildLib.map((edge, index) => {
    const name = edge.cat;

    const children = edge.children.map(edge => {
      const subName = edge.name;
      const link = edge.link;

      return (
        <LWrap
          key={link}
          variants={foldVariants}
          animate={selected === name ? "open" : "closed"}
          initial={false}
        >
          <TLink to={`/${link}`}>{subName}</TLink>
        </LWrap>
      );
    });

    return (
      <div key={index}>
        <NWrap>
          <Inline
            onClick={() => {
              selected === name ? setSelected(null) : setSelected(name);
            }}
          >
            {name}
          </Inline>
        </NWrap>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </div>
    );
  });

  const SingleLibraries = singleLib.map(edge => {
    const name = edge.name;
    const link = edge.link;

    return (
      <Main key={link}>
        <TLink to={`/${link}`}>
          <div
            onClick={() => {
              setSelected(null);
            }}
          >
            {name}
          </div>
        </TLink>
      </Main>
    );
  });

  return (
    <>
      <Wrapper
        variants={{
          open: {
            x: 0,
            opacity: 1
          },
          closed: {
            x: -300,
            opacity: 0
          }
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 130
        }}
        animate={folded === true ? "open" : "closed"}
        initial={false}
      >
        <h3>Components</h3>
        {ChildComponents}
        {SingleComponents}
        <h3>Libraries</h3>
        {ChildLibraries}
        {SingleLibraries}
      </Wrapper>
      <FoldButton
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          folded === true ? setFolded(false) : setFolded(true);
        }}
        animate={folded === true ? "open" : "closed"}
        initial={false}
        variants={{
          open: {
            x: 0
          },
          closed: {
            x: -200
          }
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 130
        }}
        viewBox="0 0 137.361 137.361"
      >
        <motion.g
          fill="#2b2b2b"
          variants={{
            open: {
              rotate: 0
            },
            closed: {
              rotate: 180
            }
          }}
        >
          <path d="M83.635 104.474a6.4 6.4 0 01-9.014 0l-31.5-31.6a6.366 6.366 0 01-.2-8.783l31.043-31.137a6.362 6.362 0 119.014 8.981L56.596 68.714l27.039 26.779a6.3 6.3 0 01.072 8.91l-.072.071z" />
          <path
            d="M137.362 68.681a68.67 68.67 0 100 .022zm-10.566 0a58.172 58.172 0 11-17.154-41.193l.116.116a57.615 57.615 0 0117.038 41.077z"
            data-name="Path 1267"
          />
        </motion.g>
      </FoldButton>
    </>
  );
}

const FoldButton = styled(motion.svg)`
  z-index: 11;
  position: fixed;
  left: 225px;
  top: 25px;
  cursor: pointer;
  width: 35px;
`;
