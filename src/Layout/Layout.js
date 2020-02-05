// Components==============
import { motion } from "framer-motion";
import { OverFlowFix } from "mixins";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TransitionEffect from "../Components/TransitionEffect";
import GlobalStyles from "../style/GlobalStyles";
import { Variables } from "../style/themes";
import IEWarning from "./IE/IEWarning";
import Nav from "./Nav";
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
  function usePersistedState(key, defaultValue) {
    const BuildTimeFix =
      typeof window !== "undefined" && localStorage.getItem(key);

    const [state, setState] = useState(
      () => JSON.parse(BuildTimeFix) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

  const [selected, setSelected] = usePersistedState("selected", null);
  const [folded, setFolded] = usePersistedState("folded", false);
  const [menuState, setMenuState] = useState("closed");

  const changeMenu = () => {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  };

  const contextValue2 = {
    menuState,
    changeMenu
  };

  const contextValue = {
    folded,
    setFolded,
    selected,
    setSelected
  };

  return (
    <ThemeProvider theme={Variables}>
      <NavContext.Provider value={contextValue}>
        <HamburgerContext.Provider value={contextValue2}>
          <OverFlowFix>
            <IEWarning />
            <Flex>
              <Nav />
              <Content
                variants={{
                  open: {
                    width: "calc(100% - 300px)",
                    x: 300
                  },
                  closed: {
                    width: "100%",
                    x: 0
                  }
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 130
                }}
                animate={folded === true ? "open" : "closed"}
                initial={false}
              >
                <TransitionEffect>{children}</TransitionEffect>
              </Content>
            </Flex>
          </OverFlowFix>
          <GlobalStyles />
        </HamburgerContext.Provider>
      </NavContext.Provider>
    </ThemeProvider>
  );
}
