// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import MenuCardDropdown from "../Components/MenuCardDropdown/MenuCardDropdown";
import NavigationExample from "../Layout/NavigationExample";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
`;

export default function MenuDropdown() {
  return (
    <div>
      <Title>Menu dropdowns</Title>
      <Elements>
        <Clipboard data-clipboard-text="vscode://file/">
          <NavigationExample>
            <li>Menu Item 1</li>
            <MenuCardDropdown name="Dropdown item 2">
              <p>Title 1</p>
              <p>Title 2 </p>
              <p>Title 3</p>
            </MenuCardDropdown>
            <li>Menu Item 3</li>
          </NavigationExample>
        </Clipboard>
      </Elements>
    </div>
  );
}
