// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  cursor: pointer;
  border: 1px #cccccc solid;
  padding: ${({ theme: { spacing } }) => `${spacing[2]} ${spacing[4]}`};

  ${({ theme: { mediaQ } }) => mediaQ.desktopM} {
    width: 300px;
  }

  &:hover {
    box-shadow: ${({ theme: { shadow } }) => shadow.s};
  }

  span {
    ${({ theme: { fontSize } }) => fontSize.s}
  }

  svg {
    width: 12.5px;
  }
`;

export default function Install({ text }: { text: string }) {
  return (
    <Wrapper
      whileHover="hover"
      initial="initial"
      whileTap="tap"
      variants={wrapper}
      onTap={() => navigator.clipboard.writeText(text)}
    >
      <div>
        <svg viewBox="0 0 12.32 9.33" style={{ display: "inline" }}>
          <g>
            <line x1="7.6" y1="8.9" x2="7.6" y2="6.9"></line>
            <rect width="1.9" height="1.9"></rect>
            <rect x="1.9" y="1.9" width="1.9" height="1.9"></rect>
            <rect x="3.7" y="3.7" width="1.9" height="1.9"></rect>
            <rect x="1.9" y="5.6" width="1.9" height="1.9"></rect>
            <rect y="7.5" width="1.9" height="1.9"></rect>
          </g>
        </svg>
        <code title="Copy Command to Clipboard">
          <span>{text}</span>
        </code>
      </div>
      <motion.svg
        variants={copy}
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="copy"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
      </motion.svg>
    </Wrapper>
  );
}

const wrapper = {
  tap: {
    scale: 0.95,
  },
  initial: {
    scale: 1,
  },
};

const copy = {
  hover: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
};
