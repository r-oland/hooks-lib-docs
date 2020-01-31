// Components==============
import { Button, Container } from "mixins";
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import SForm from "../Components/SForm";
// =========================

const Wrapper = styled(Container)`
  text-align: center;
  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Clip = styled(Clipboard)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function StoryForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    modalIsOpen === false ? setModalIsOpen(true) : setModalIsOpen(false);
  };

  return (
    <Wrapper>
      <h2>Story form</h2>
      <SForm modalIsOpen={modalIsOpen} handleChange={handleChange} />
      <Button
        style={{ display: "block", margin: "0 auto" }}
        onClick={handleChange}
      >
        open form
      </Button>
      <Clip data-clipboard-text="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SForm.js">
        Select
      </Clip>
    </Wrapper>
  );
}
