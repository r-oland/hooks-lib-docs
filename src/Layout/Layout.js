// Components==============
import { motion } from "framer-motion";
import { useMediaQ } from "hooks-lib";
import React, { useState } from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import { Container } from "../style/Mixins";
import { Variables } from "../style/themes";
import IEWarning from "./IE/IEWarning";
import Nav from "./nav/Nav";

setConfig({
  showReactDomPatchNotification: false,
});
// =========================

const Flex = styled.div`
  display: flex;
`;

const Content = styled(motion.div)`
  min-height: 100vh;

  padding: ${({ theme: { spacing } }) => `${spacing[11]} 0`};

  @media screen and (min-width: 1000px) {
    padding: ${({ theme: { spacing } }) => `${spacing[7]} 0`};
  }
`;

export const NavContext = React.createContext();
export const HamburgerContext = React.createContext();

function Layout({ children }) {
  const [folded, setFolded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [menuState, setMenuState] = useState("closed");
  const query = useMediaQ("min", 1000);

  const changeMenu = () => {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  };

  const contextValue2 = {
    menuState,
    changeMenu,
  };

  const contextValue = {
    folded,
    setFolded,
    selected,
    setSelected,
    query,
  };

  return (
    <ThemeProvider theme={Variables}>
      <NavContext.Provider value={contextValue}>
        <HamburgerContext.Provider value={contextValue2}>
          <IEWarning />
          <Flex>
            <Nav />
            <Content
              variants={{
                open: {
                  width: "calc(100% - 300px)",
                  x: 300,
                },
                closed: {
                  width: "100%",
                  x: 0,
                },
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 130,
              }}
              animate={folded ? "open" : "closed"}
              initial={false}
            >
              <Container>{children}</Container>
            </Content>
          </Flex>
          <GlobalStyles />
        </HamburgerContext.Provider>
      </NavContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Layout);
