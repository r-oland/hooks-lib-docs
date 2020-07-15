// Components==============
import { useMediaQ } from "hooks-lib";
import React, { useState } from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
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

type context = {
  folded: boolean;
  setFolded: React.Dispatch<React.SetStateAction<boolean>>;
  query: boolean;
  slug: string;
  hook: string;
};

export const AppContext = React.createContext<context>({
  folded: true,
  setFolded: () => "",
  query: false,
  slug: "uselog",
  hook: "useLog",
});

type props = {
  pageContext: { slug: string; hook: string };
  children: React.ReactNode;
};

function Layout({ pageContext, children }: props) {
  const [folded, setFolded] = useState(true);
  const query = useMediaQ("min", 1000);

  const contextValue = {
    folded,
    setFolded,
    query,
    slug: pageContext.slug,
    hook: pageContext.hook,
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextValue}>
        <IEWarning />
        <Flex>
          <Nav />
          {children}
        </Flex>
        <GlobalStyles />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Layout);
