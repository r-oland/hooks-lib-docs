// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
// =========================

const Main = styled.div`
  line-height: 1.4;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
`;

export default function NavItem({ data }) {
  const { setSelected, setFolded, query } = useContext(NavContext);

  const components = data.map((e, index) => {
    const name = e.name;
    const link = name.toLowerCase();

    return (
      <Main
        key={index}
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
  return components;
}
