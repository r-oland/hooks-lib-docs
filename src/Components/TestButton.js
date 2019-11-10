// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Test = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
`;

export default function TestButton() {
   return <Test>He I'm a button</Test>;
}
