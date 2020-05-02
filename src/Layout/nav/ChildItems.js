// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import { ChildComp, ChildLib } from "./NavData";
// =========================

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

const foldVariants = {
  open: {
    height: "auto",
    opacity: 1,
    visibility: "visible",
  },
  closed: {
    height: 0,
    opacity: 0,
    visibility: "hidden",
  },
};

export function ChildLibraries() {
  const { selected, setSelected, setFolded, query } = useContext(NavContext);

  const CL = ChildLib.map((edge, index) => {
    const name = edge.cat;

    const children = edge.children.map((edge) => {
      const subName = edge.name;
      const link = edge.link;

      return (
        <LWrap
          key={link}
          variants={foldVariants}
          animate={selected === name ? "open" : "closed"}
          initial={false}
          onClick={() => {
            !query && setFolded(false);
          }}
        >
          <Link to={`/${link}`}>{subName}</Link>
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
  return CL;
}

export function ChildComponents() {
  const { selected, setSelected, setFolded, query } = useContext(NavContext);

  const CC = ChildComp.map((edge, index) => {
    const name = edge.cat;

    const children = edge.children.map((edge) => {
      const subName = edge.name;
      const link = edge.link;

      return (
        <LWrap
          key={link}
          variants={foldVariants}
          animate={selected === name ? "open" : "closed"}
          initial={false}
          onClick={() => {
            !query && setFolded(false);
          }}
        >
          <Link to={`/${link}`}>{subName}</Link>
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
  return CC;
}
