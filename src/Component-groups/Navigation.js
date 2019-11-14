// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import BasicNavigation from "../Components/BasicNavigation";
import BasicNavigationColor from "../Components/BasicNavigationColor";
import BasicNavigationOnScroll from "../Components/BasicNavigationOnScroll";
import BasicNavigationShadow from "../Components/BasicNavigationShadow";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
  min-height: 90vh;
`;

const Margin = styled(Clipboard)`
  margin-bottom: 3em;
`;

export default function Navigation() {
  return (
    <div>
      <Title>Navigation bars</Title>
      <Elements>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigation.js">
          <BasicNavigation />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationColor.js">
          <BasicNavigationColor />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationShadow.js">
          <BasicNavigationShadow />
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationOnScroll.js">
          <BasicNavigationOnScroll />
        </Margin>
      </Elements>
    </div>
  );
}
