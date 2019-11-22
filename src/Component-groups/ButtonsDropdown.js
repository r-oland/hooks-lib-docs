// Components==============
import { Container } from "mixins";
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import SimpleDropdownButton from "../Components/SimpleDropdownButton/SimpleDropdownButton";
import SimpleDropdownButton2 from "../Components/SimpleDropdownButton2/SimpleDropdownButton2";
// =========================

const Wrapper = styled(Container)`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 4em 3em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 4em 0;
`;

export default function ButtonsDropdown() {
  return (
    <Wrapper>
      <h2>Dropdown buttons</h2>
      <Grid>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleDropdownButton/SimpleDropdownButton.js">
          <SimpleDropdownButton buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SimpleDropdownButton>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleDropdownButton/SimpleDropdownButton2.js">
          <SimpleDropdownButton2 buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SimpleDropdownButton2>
        </Clipboard>
      </Grid>
    </Wrapper>
  );
}
