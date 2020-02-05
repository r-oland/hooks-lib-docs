// Components==============
import { motion } from "framer-motion";
import { Container, flexUnit } from "mixins";
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import styled, { ThemeContext } from "styled-components";
// =========================

const NavWrapper = styled(motion.div)`
  width: 100vw;
`;

const TopRef = styled.div`
  position: absolute;
  visibility: hidden;
  top: 101vh;
  height: 100%;
  width: 100%;
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};
`;

const Logo = styled.div`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${flexUnit(2, 19, 20, "vw", "font-size")}
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 900px) {
    display: flex;
  }

  li {
    cursor: pointer;
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
      color: ${({ theme: { primary } }) => primary.s7};
    }
  }

  a {
  }
`;

export default function BasicNavigationOnScroll() {
  const [ref, inView] = useInView({ threshold: 0 });
  const themeContext = useContext(ThemeContext);

  return (
    <NavWrapper
      animate={inView ? "top" : "else"}
      variants={{
        top: {
          backgroundColor: themeContext.primary.s4
        },
        else: {
          backgroundColor: themeContext.gray.s1
        }
      }}
      initial={false}
    >
      <TopRef ref={ref} />
      <FlexContainer>
        <Logo>Logo</Logo>
        <MenuItems>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
          <li>Menu item 4</li>
        </MenuItems>
      </FlexContainer>
    </NavWrapper>
  );
}
