// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  transform-origin: right bottom;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #151515;
  position: absolute;
  pointer-events: none;
`;

const LoadText = styled(motion.p)`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  color: ${({ theme: { color } }) => color.white};
  ${({ theme: { fontSize } }) => fontSize.h2}
`;

export default function Playground({ sandbox }: { sandbox: string }) {
  return (
    <Wrapper initial="initial" animate="mount" variants={parent}>
      <Overlay variants={overlay} />
      <LoadText variants={overlay}>Loading playground...</LoadText>

      <iframe
        src={`${sandbox}&codemirror=1&editorsize=60`}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </Wrapper>
  );
}

const parent = {
  mount: { transition: { delayChildren: 1.2 } },
};

const overlay = {
  initial: { opacity: 1 },
  mount: { opacity: 0 },
};
