// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import Log from "../../components/Logo";
import { NavContext } from "../Layout";
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

const Svg = styled.div`
  opacity: 0;

  @media screen and (min-width: 1000px) {
    opacity: 1;
  }
`;

export default function Logo() {
  const { setFolded, query } = useContext(NavContext);

  return (
    <Flex
      to="/"
      onClick={() => {
        !query && setFolded(false);
      }}
    >
      <Svg>
        <Log width="40px" />
      </Svg>
      <Wrapper>
        <h4>Library</h4>
        <p>Roland Branten</p>
      </Wrapper>
    </Flex>
  );
}
