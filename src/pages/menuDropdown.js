// Components==============
import Stock2 from "assets/Stock2.svg";
import Stock3 from "assets/Stock3.svg";
import Stock4 from "assets/Stock4.svg";
import React from "react";
import styled from "styled-components";
import MenuCardDropdown from "../Components/MenuCardDropdown/MenuCardDropdown";
import MenuCardDropdown2 from "../Components/MenuCardDropdown2/MenuCardDropdown2";
import MenuCardDropdown3 from "../Components/MenuCardDropdown3/MenuCardDropdown3";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Margin = styled.div`
  padding-bottom: 3em;
  display: block;
  margin: 0 auto;
`;

export default function MenuDropdown() {
  return (
    <>
      <Head title="Dropdown menu" />
      <Title>Dropdown menu</Title>
      <Wrapper>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown/MenuCardDropdown.js">
          <Margin>
            <MenuCardDropdown name="Dropdown item">
              <p>Title 1</p>
              <p>Title 2 </p>
              <p>Title 3</p>
            </MenuCardDropdown>
          </Margin>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown2/MenuCardDropdown2.js">
          <Margin>
            <MenuCardDropdown2 name="Dropdown item">
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
          </Margin>
        </Clipboard>

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/MenuCardDropdown3/MenuCardDropdown3.js">
          <Margin>
            <MenuCardDropdown3 name="Dropdown item">
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
          </Margin>
        </Clipboard>
      </Wrapper>
    </>
  );
}
