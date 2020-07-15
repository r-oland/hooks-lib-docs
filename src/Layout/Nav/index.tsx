// Components==============
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

const Wrapper = styled.div<Wrapper>`
  height: 100vh;
  background: ${({ theme: { color } }) => color.white};
  padding: ${({ theme: { spacing } }) => `0 ${spacing[4]} 0 `};
  display: ${({ folded }) => (folded ? `block` : "none")};
  width: 225px;
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
      <Wrapper folded={folded}>
        <Header />
        <Title>Hooks</Title>
        <NavItem data={data.allSanityHooks.nodes} />
      </Wrapper>
      <FoldButton />
    </div>
  );
}
