// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import SubItems from "./SubItems";
// =========================

type Main = {
  current: boolean;
};

const Main = styled.div<Main>`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};

  a {
    font-weight: ${({ theme: { fontWeight }, current }) =>
      current && fontWeight.bold};
  }
`;

type SubLink = {
  name: string;
  selected: string;
};

const SubLink = styled(Link)<SubLink>`
  
    ${({ theme: { fontSize } }) => fontSize.s}
    color: ${({ theme: { color } }) => color.black};

    font-weight: ${({ theme: { fontWeight }, name, selected }) =>
      name === selected && fontWeight.bold};
`;

export default function NavItem({ data }: { data: any }) {
  const { selected, setFolded, query } = useContext(NavContext);

  const components = data.map((e: any, index: number) => {
    const name = e.name;
    const link = name.toLowerCase();
    const subMenu = e.subMenu;
    const current = selected === name;

    const componentGroup =
      subMenu &&
      e.componentCollection.map((edge: any) => {
        const name = edge.name;
        const link = name.toLowerCase();

        return (
          <li key={name}>
            <SubLink to={`/${link}`} name={name} selected={selected}>
              {name}
            </SubLink>
          </li>
        );
      });

    return (
      <Main
        key={index}
        onClick={() => {
          !query && !subMenu && setFolded(false);
        }}
        current={current}
      >
        {!subMenu && <Link to={`/${link}`}>{name}</Link>}
        {subMenu && <SubItems componentGroup={componentGroup} name={name} />}
      </Main>
    );
  });
  return components;
}
