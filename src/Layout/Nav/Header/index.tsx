// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../Layout";
import Logo from "./Logo";
// =========================

const Flex = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
  margin-left: 30px;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    margin-left: 0;
  }
`;

const Wrapper = styled.div`
  margin-left: ${({ theme: { spacing } }) => spacing[1]};
  h4 {
    font-size: 19px;
    line-height: 1;
  }

  p {
    line-height: 1;
    ${({ theme: { fontSize } }) => fontSize.xs}
  }
`;

const Bar = styled.div`
  width: 90%;
  height: 1.5px;
  background: ${({ theme: { color } }) => color.black};
  margin: 0 auto;
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
  opacity: 0.1;
`;

export default function Header() {
  const { setFolded, query } = useContext(AppContext);

  return (
    <>
      <Flex
        to="/"
        onClick={() => {
          !query && setFolded(false);
        }}
      >
        <Logo />
        <Wrapper>
          <h4>hooks-lib</h4>
          <p>React hooks</p>
        </Wrapper>
      </Flex>
      <Bar />
    </>
  );
}
