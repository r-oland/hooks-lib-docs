// Components==============
import { motion } from "framer-motion";
import { useMediaQ } from "hooks-lib";
import React, { useState } from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import { Container } from "../style/Mixins";
import { theme } from "../style/themes";
import IEWarning from "./IE/IEWarning";
import Nav from "./Nav";

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
`;

type context = {
  folded: boolean;
  setFolded: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  query: boolean;
};

export const NavContext = React.createContext<context>({
  folded: true,
  setFolded: () => "",
  selected: "",
  setSelected: () => "",
  query: false,
});

type props = {
  pageContext: any;
  children: React.ReactNode;
};

function Layout({ pageContext, children }: props) {
  const [folded, setFolded] = useState(true);
  const [selected, setSelected] = useState("");
  const query = useMediaQ("min", 1000);

  const contextValue = {
    folded,
    setFolded,
    selected,
    setSelected,
    query,
  };

  return (
    <ThemeProvider theme={theme}>
      <NavContext.Provider value={contextValue}>
        <IEWarning />
        <Flex>
          <Nav path={pageContext} />
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
      </NavContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Layout);
