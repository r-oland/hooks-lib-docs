// Components==============
import { motion } from "framer-motion";
import { useMediaQ } from "hooks-lib";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import { Variables } from "../style/themes";
import IEWarning from "./IE/IEWarning";
import Nav from "./nav/Nav";
// =========================

const Flex = styled.div`
  display: flex;
`;

const Content = styled(motion.div)`
  min-height: 100vh;
`;

export const NavContext = React.createContext();
export const HamburgerContext = React.createContext();

export default function Layout({ children }) {
  const [folded, setFolded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [menuState, setMenuState] = useState("closed");
  const query = useMediaQ("min", 800);

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
              animate={folded === true ? "open" : "closed"}
              initial={false}
            >
              {children}
            </Content>
          </Flex>
          <GlobalStyles />
        </HamburgerContext.Provider>
      </NavContext.Provider>
    </ThemeProvider>
  );
}
