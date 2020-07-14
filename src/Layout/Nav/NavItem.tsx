// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Layout";
// =========================

type Main = {
  current: boolean;
};

const Main = styled.div<Main>`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};

  a {
    ${({ theme: { fontSize } }) => fontSize.s}
    font-weight: ${({ theme: { fontWeight }, current }) =>
      current && fontWeight.bold};
  }
`;

export default function NavItem({ data }: { data: any }) {
  const { setFolded, query, slug, hook } = useContext(AppContext);

  const components = data.map((e: any, index: number) => {
    const name = e.name;
    const current = hook === name;

    return (
      <Main
        key={index}
        onClick={() => {
          !query && setFolded(false);
        }}
        current={current}
      >
        <Link to={`/${name.toLowerCase()}`}>{name}</Link>
      </Main>
    );
  });
  return components;
}
