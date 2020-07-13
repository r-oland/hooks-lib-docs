// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../../Layout";
import Logo from "./Logo";
// =========================

const Flex = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  width: 185px;

  p {
    line-height: 1;
    font-size: 15px;
  }
`;

const Wrapper = styled.div`
  padding-left: ${({ theme: { spacing } }) => spacing[1]};
`;

export default function Header() {
  const { setFolded, query } = useContext(NavContext);

  return (
    <Flex
      to="/"
      onClick={() => {
        !query && setFolded(false);
      }}
    >
      <Logo />
      <Wrapper>
        <h4>Library</h4>
        <p>Roland Branten</p>
      </Wrapper>
    </Flex>
  );
}
