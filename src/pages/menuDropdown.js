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
import NavigationExample from "../Layout/Examples/NavigationExample";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div``;

const Margin = styled(Clipboard)`
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

export default function MenuDropdown() {
  return (
    <Layout>
      <Head title="Dropdown menu" />
      <Title>Dropdown menu</Title>
      <Wrapper>
        <NavigationExample>
          <li>Menu Item 1</li>
          <MenuCardDropdown name="Dropdown item 2">
            <p>Title 1</p>
            <p>Title 2 </p>
            <p>Title 3</p>
          </MenuCardDropdown>
          <li>Menu Item 3</li>
        </NavigationExample>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown/MenuCardDropdown.js">
          select
        </Margin>

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
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown2/MenuCardDropdown2.js">
          select
        </Margin>

        <NavigationExample>
          <li>Menu Item 1</li>
          <MenuCardDropdown3 name="Dropdown item 2">
            <div className="dropdownItem">
              <img src={Stock2} alt="Stock2" />
              <p>Title 1</p>
              <div className="subDropdownText">Additional text</div>
            </div>
            <div className="dropdownItem">
              <img src={Stock3} alt="Stock3" />
              <p>Title 2</p>
              <div className="subDropdownText">Additional text</div>
            </div>
            <div className="dropdownItem">
              <img src={Stock4} alt="Stock4" />
              <p>Title 3</p>
              <div className="subDropdownText">Additional text</div>
            </div>
          </MenuCardDropdown3>
          <li>Menu Item 3</li>
        </NavigationExample>
        <Margin data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown3/MenuCardDropdown3.js">
          select
        </Margin>
      </Wrapper>
    </Layout>
  );
}
