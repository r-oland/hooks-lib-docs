// Components==============
import React from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import SimpleDropdownButton from "../Components/SimpleDropdownButton/SimpleDropdownButton";
import SimpleDropdownButton2 from "../Components/SimpleDropdownButton2/SimpleDropdownButton2";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;
const Grid = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 4em 3em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 4em 0;
`;

export default function DropdownButtons() {
  return (
    <Layout>
      <Head title="Dropdown button" />
      <Title>Dropdown button</Title>
      <Grid>
        <div>
          <SimpleDropdownButton buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SimpleDropdownButton>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleDropdownButton/SimpleDropdownButton.js"
          >
            select
          </Clipboard>
        </div>
        <div>
          <SimpleDropdownButton2 buttonText={`button text`}>
            <li>Choice one</li>
            <li>Choice two</li>
            <li>Choice three</li>
            <li>Choice four</li>
          </SimpleDropdownButton2>
          <Clipboard
            style={{ display: "block", margin: "0 auto" }}
            data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleDropdownButton2/SimpleDropdownButton2.js"
          >
            select
          </Clipboard>
        </div>
      </Grid>
    </Layout>
  );
}
