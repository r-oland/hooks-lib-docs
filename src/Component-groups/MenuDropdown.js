// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import MenuCardDropdown from "../Components/MenuCardDropdown/MenuCardDropdown";
import MenuCardDropdown2 from "../Components/MenuCardDropdown2/MenuCardDropdown2";
import NavigationExample from "../Layout/NavigationExample";
// =========================

const Title = styled.h2`
  text-align: center;
`;

const Elements = styled.div`
  margin: 4em 0;
`;

const Margin = styled(Clipboard)`
  margin-bottom: 3em;
`;

export default function MenuDropdown() {
  return (
    <div>
      <Title>Menu dropdowns</Title>
      <Elements>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown/MenuCardDropdown.js">
          <NavigationExample>
            <li>Menu Item 1</li>
            <MenuCardDropdown name="Dropdown item 2">
              <p>Title 1</p>
              <p>Title 2 </p>
              <p>Title 3</p>
            </MenuCardDropdown>
            <li>Menu Item 3</li>
          </NavigationExample>
        </Margin>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown/MenuCardDropdown2.js">
          <NavigationExample>
            <li>Menu Item 1</li>
            <MenuCardDropdown2 name="Dropdown item 2">
              <div className="dropdownItem">
                <p>Title 1</p>
                <div className="subDropdownText">Additional text</div>
              </div>
              <div className="dropdownItem">
                <p>Title 2</p>
                <div className="subDropdownText">Additional text</div>
              </div>
              <div className="dropdownItem">
                <p>Title 3</p>
                <div className="subDropdownText">Additional text</div>
              </div>
            </MenuCardDropdown2>
            <li>Menu Item 3</li>
          </NavigationExample>
        </Margin>
      </Elements>
    </div>
  );
}
