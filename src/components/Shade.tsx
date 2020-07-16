// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Layout/Layout";
// =========================

type Wrapper = {
  folded: boolean;
};

const Wrapper = styled.div<Wrapper>`
  position: absolute;
  background: black;
  width: 100%;
  height: 100%;
  opacity: ${({ folded }) => (folded ? 0.6 : 0)};
  transition: 0.2s;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;

  ${({ theme: { mediaQ } }) => mediaQ.mobile} {
    display: none;
  }
`;

export default function Shade() {
  const { folded } = useContext(AppContext);

  return <Wrapper folded={folded} />;
}
