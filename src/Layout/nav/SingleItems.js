// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import { singleComp, singleLib } from "./NavData";
// =========================

const Main = styled.div`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
`;

export function SingleComponents() {
  const { setSelected, setFolded, query } = useContext(NavContext);

  const SC = singleComp.map((edge) => {
    const name = edge.name;
    const link = edge.link;
    return (
      <Main
        key={link}
        onClick={() => {
          !query && setFolded(false);
        }}
      >
        <Link to={`/${link}`}>
          <button
            onClick={() => {
              setSelected(null);
            }}
          >
            {name}
          </button>
        </Link>
      </Main>
    );
  });
  return SC;
}

export function SingleLibraries() {
  const { setSelected, setFolded, query } = useContext(NavContext);

  const SL = singleLib.map((edge) => {
    const name = edge.name;
    const link = edge.link;

    return (
      <Main
        key={link}
        onClick={() => {
          !query && setFolded(false);
        }}
      >
        <Link to={`/${link}`}>
          <button
            onClick={() => {
              setSelected(null);
            }}
          >
            {name}
          </button>
        </Link>
      </Main>
    );
  });
  return SL;
}
