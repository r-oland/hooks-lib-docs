// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
import SubItems from "./SubItems";
// =========================

const Main = styled.div`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};

  a {
    font-weight: ${({ theme: { fontWeight }, current }) =>
      current && fontWeight.bold};
  }
`;

const SubLink = styled(Link)`
  
    ${({ theme: { fontSize } }) => fontSize.s}
    color: ${({ theme: { gray } }) => gray[12]};

    font-weight: ${({ theme: { fontWeight }, name, selected }) =>
      name === selected && fontWeight.bold};
`;

export default function NavItem({ data }) {
  const { selected, setFolded, query } = useContext(NavContext);

  const components = data.map((e, index) => {
    const name = e.name;
    const link = name.toLowerCase();
    const subMenu = e.subMenu;
    const current = selected === name;

    const componentGroup =
      subMenu &&
      e.componentCollection.map((edge) => {
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
