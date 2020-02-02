// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import ASMHamburger from "../Components/AnimatedSideMenu/ASMHamburger";
import ASMMenu from "../Components/AnimatedSideMenu/ASMMenu";
import AWMHamburger from "../Components/AnimatedWaterfallMenu/AWMHamburger";
import AWMMenu from "../Components/AnimatedWaterfallMenu/AWMMenu";
import FullScreenWaterfallMenu from "../Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu";
import NavigationExample2 from "../Layout/Examples/NavigationExample2";
import NavigationExample3 from "../Layout/Examples/NavigationExample3";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
`;

const Margin = styled(Clipboard)`
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

export default function Hamburger() {
  const [menuState, setMenuState] = useState("closed");
  const [menuState2, setMenuState2] = useState("closed");

  return (
    <div>
      <Title>Hamburger menu's</Title>
      <Elements>
        <NavigationExample2>
          <FullScreenWaterfallMenu />
        </NavigationExample2>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/FullScreenWaterfallMenu/FullScreenWaterfallMenu.js">
          select
        </Margin>

        <NavigationExample3>
          <AWMHamburger menuState={menuState} setMenuState={setMenuState} />
        </NavigationExample3>
        <AWMMenu menuState={menuState} setMenuState={setMenuState} />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedWaterfallMenu/AWMHamburger.js">
          select
        </Margin>

        <NavigationExample2>
          <ASMHamburger menuState={menuState2} setMenuState={setMenuState2} />
        </NavigationExample2>
        <ASMMenu menuState={menuState2} setMenuState={setMenuState2} />
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/AnimatedSideMenu/ASMHamburger.js">
          select
        </Margin>
      </Elements>
    </div>
  );
}
