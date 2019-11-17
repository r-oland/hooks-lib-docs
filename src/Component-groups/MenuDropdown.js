// Components==============
import Stock2 from "assets/Stock2.svg";
import Stock3 from "assets/Stock3.svg";
import Stock4 from "assets/Stock4.svg";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import MenuCardDropdown from "../Components/MenuCardDropdown/MenuCardDropdown";
import MenuCardDropdown2 from "../Components/MenuCardDropdown2/MenuCardDropdown2";
import MenuCardDropdown3 from "../Components/MenuCardDropdown3/MenuCardDropdown3";
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

const Stock2SVG = styled.img``;

const Stock3SVG = styled.img``;

const Stock4Svg = styled.img``;

export default function MenuDropdown() {
  return (
    <div style={{ minHeight: `120vh` }}>
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
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown/MenuCardDropdown3.js">
          <NavigationExample>
            <li>Menu Item 1</li>
            <MenuCardDropdown3 name="Dropdown item 2">
              <div className="dropdownItem">
                <Stock2SVG src={Stock2} alt="Stock2" />
                <p>Title 1</p>
                <div className="subDropdownText">Additional text</div>
              </div>
              <div className="dropdownItem">
                <Stock3SVG src={Stock3} alt="Stock3" />
                <p>Title 2</p>
                <div className="subDropdownText">Additional text</div>
              </div>
              <div className="dropdownItem">
                <Stock4Svg src={Stock4} alt="Stock4" />
                <p>Title 3</p>
                <div className="subDropdownText">Additional text</div>
              </div>
            </MenuCardDropdown3>
            <li>Menu Item 3</li>
          </NavigationExample>
        </Margin>
      </Elements>
    </div>
  );
}
