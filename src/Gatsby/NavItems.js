// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import navItems from "../const/navItems";
// =========================

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.li`
  margin-left: ${({ theme: { spacing } }) => spacing[6]};
  cursor: pointer;
`;

export default function NavItems() {
  const items = navItems.map((e, index) => {
    return (
      <Item key={index}>
        <Link to={`/${e.link}`}>{e.content}</Link>
      </Item>
    );
  });

  return <Items>{items}</Items>;
}
