// Components==============
import React from "react";
import styled from "styled-components";
// =========================

type modal = {
  modalIsOpen: boolean;
};

const Shade = styled.div<modal>`
  position: fixed;
  visibility: ${({ modalIsOpen }) =>
    modalIsOpen === true ? `visible` : `hidden`};
  opacity: ${({ modalIsOpen }) => (modalIsOpen === true ? "1" : "0")};
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: ${({ theme: { color } }) => color.black};
  opacity: 0.8;
  top: 0;
  left: 0;
  transition: 0.5s;
`;

const Modal = styled.div<modal>`
  visibility: ${({ modalIsOpen }) =>
    modalIsOpen === true ? `visible` : `hidden`};
  opacity: ${({ modalIsOpen }) => (modalIsOpen === true ? "1" : "0")};
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
  position: fixed;
  z-index: 301;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  transition: 0.5s;
  text-align: center;

  .close {
    cursor: pointer;
    position: fixed;
    right: ${({ theme: { spacing } }) => spacing[4]};
    top: ${({ theme: { spacing } }) => spacing[2]};
    color: ${({ theme: { color } }) => color.white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    z-index: 302;
  }
`;

const OverflowDiv = styled.div`
  overflow: auto;
  max-height: 80vh;
  padding: ${({ theme: { spacing } }) => `${spacing[7]} ${spacing[4]}`};
`;

type props = {
  modalIsOpen: boolean;
  children: React.ReactNode;
  handleChange: () => void;
};

export default function IEModal({
  modalIsOpen,
  children,
  handleChange,
}: props) {
  return (
    <div>
      <Shade modalIsOpen={modalIsOpen} />
      <Modal modalIsOpen={modalIsOpen}>
        <OverflowDiv>
          <button className="close" onClick={handleChange}>
            Negeer
          </button>
          {children}
        </OverflowDiv>
      </Modal>
    </div>
  );
}
