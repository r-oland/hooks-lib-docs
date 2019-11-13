// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import HalfRoundedDropdownButton from "../Components/HalfRoundedDropdownButton/HalfRoundedDropdownButton";
import HalfRoundedDropdownButton2 from "../Components/HalfRoundedDropdownButton2/HalfRoundedDropdownButton2";
import SquareDropdownButton from "../Components/SqaureDropdownButton/SquareDropdownButton";
import SquareDropdownButton2 from "../Components/SqaureDropdownButton2/SqaureDropdownButton2";
import { Container } from "../style/Mixins";
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
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedDropdownButton/HalfRoundedDropdownButton.js">
          <HalfRoundedDropdownButton buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </HalfRoundedDropdownButton>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedDropdownButton/HalfRoundedDropdownButton2.js">
          <HalfRoundedDropdownButton2 buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </HalfRoundedDropdownButton2>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedDropdownButton/SquareDropdownButton.js">
          <SquareDropdownButton buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SquareDropdownButton>
        </Clipboard>
        <Clipboard data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/HalfRoundedDropdownButton/SquareDropdownButton2.js">
          <SquareDropdownButton2 buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SquareDropdownButton2>
        </Clipboard>
      </Grid>
    </Wrapper>
  );
}
