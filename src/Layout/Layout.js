// Components==============
import { OverFlowFix } from "mixins";
import React from "react";
import { ThemeProvider } from "styled-components";
import TransitionEffect from "../Components/TransitionEffect";
import Nav from "../Nav";
import GlobalStyles from "../style/GlobalStyles";
import { Variables } from "../style/themes";
import IEWarning from "./IE/IEWarning";
// =========================

export default function Layout({
  children,
  category,
  setCategory,
  isFoldedOut,
  setIsFoldedOut
}) {
  return (
    <ThemeProvider theme={Variables}>
      <OverFlowFix>
        <IEWarning />
        <Nav
          category={category}
          setCategory={setCategory}
          isFoldedOut={isFoldedOut}
          setIsFoldedOut={setIsFoldedOut}
        />
        <TransitionEffect> {children}</TransitionEffect>
      </OverFlowFix>
      <GlobalStyles />
    </ThemeProvider>
  );
}
