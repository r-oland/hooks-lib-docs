// Components==============
import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import styled from "styled-components";
import SForm from "../Components/SForm";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
import { Button, Container } from "../style/Mixins";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled(Container)`
  text-align: center;
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
    <Layout>
      <Head title="Story form" />
      <Title>Story form</Title>
      <Wrapper>
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
    </Layout>
  );
}
