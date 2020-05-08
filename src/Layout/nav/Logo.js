// Components==============
import logo from "assets/Icon.svg";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Flex = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  width: 185px;

  div {
    padding-left: ${({ theme: { spacing } }) => spacing[1]};
  }

  p {
    line-height: 1;
    font-size: 15px;
  }
`;

const Svg = styled.img`
  width: 40px;
  opacity: 0;

  @media screen and (min-width: 1000px) {
    opacity: 1;
  }
`;

export default function Logo() {
  return (
    <Flex to="/">
      <Svg src={logo} alt="logo" />
      <div>
        <h4>Library</h4>
        <p>Roland Branten</p>
      </div>
    </Flex>
  );
}
