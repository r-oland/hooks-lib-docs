// Components==============
import { useToggle } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Sub = styled.ul`
  margin-top: ${({ theme: { spacing } }) => spacing[0]};

  li {
    padding-left: ${({ theme: { spacing } }) => spacing[2]};
  }
`;

type props = {
  componentGroup: any;
  name: string;
};

export default function SubItems({ componentGroup, name }: props) {
  const [isToggled, , toggle] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>{name}</button>
      {isToggled && <Sub>{componentGroup}</Sub>}
    </>
  );
}
