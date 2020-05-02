// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import SForm from "../Components/SForm";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import { Button, Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  text-align: center;
`;

export default function StoryForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    modalIsOpen === false ? setModalIsOpen(true) : setModalIsOpen(false);
  };

  return (
    <>
      <Head title="Story form" />
      <Title>Story form</Title>
      <Wrapper>
        <SForm modalIsOpen={modalIsOpen} handleChange={handleChange} />

        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SForm.js">
          <Button
            style={{ display: "block", margin: "0 auto" }}
            onClick={handleChange}
          >
            open form
          </Button>
        </Clipboard>
      </Wrapper>
    </>
  );
}
