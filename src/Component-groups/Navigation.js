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
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

export default function Navigation() {
  return (
    <div>
      <Title>Navigation bars</Title>
      <Elements>
        <div>
          <BasicNavigation />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigation.js">
            select
          </Margin>
        </div>
        <div>
          <BasicNavigationColor />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationColor.js">
            select
          </Margin>
        </div>
        <div>
          <BasicNavigationShadow />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationShadow.js">
            select
          </Margin>
        </div>
        <div>
          <BasicNavigationOnScroll />
          <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/BasicNavigationOnScroll.js">
            select
          </Margin>
        </div>
      </Elements>
    </div>
  );
}
