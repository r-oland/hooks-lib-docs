// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { SimpleButton } from "../Components/SimpleButton";
import SimpleModal from "../Components/SimpleModal/SimpleModal";
import Clipboard from "../Layout/Clipboard";
import Head from "../Layout/Head";
import Layout from "../Layout/Layout";
// =========================

const Title = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s3}`};
`;

const Wrapper = styled.div`
  text-align: center;
`;

export default function Modals() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    modalIsOpen === false ? setModalIsOpen(true) : setModalIsOpen(false);
  };
  return (
    <Layout>
      <Head title="Modals" />
      <Title>Modals</Title>
      <Wrapper>
        <SimpleModal modalIsOpen={modalIsOpen} handleChange={handleChange}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut
            nesciunt temporibus necessitatibus laudantium sequi quisquam saepe.
            Labore temporibus aut architecto illum iusto. Quas dolor sit neque
            deserunt repellat, fugit itaque quis amet non minima eos beatae
            veritatis illum esse sequi officia eius quidem voluptatum laudantium
            expedita harum enim velit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus architecto numquam corrupti dolorum! Ipsa maiores neque
            minus, corporis adipisci deserunt! Nulla molestias vel, numquam
            nesciunt commodi molestiae voluptatem velit cum voluptatum pariatur
            nisi mollitia magni harum maiores quibusdam quos magnam aperiam
            dolorem neque eos, aliquam recusandae id. Ex enim at impedit ipsum
            nostrum sint autem blanditiis officia possimus. Nihil!
          </p>
        </SimpleModal>
        <Clipboard copy="vscode://file/d:/Freelancing/Code/Real projects/Components/src/Components/SimpleModal/SimpleModal.js">
          <SimpleButton onClick={handleChange}>Click me</SimpleButton>
        </Clipboard>
      </Wrapper>
    </Layout>
  );
}
