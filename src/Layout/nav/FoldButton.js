// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout";
// =========================

const Button = styled(motion.svg)`
  z-index: 11;
  position: fixed;
  cursor: pointer;
  width: 35px;
  left: 25px;
  top: 25px;

  @media screen and (min-width: 800px) {
    left: 225px;
  }
`;

export default function FoldButton() {
  const { folded, setFolded, query } = useContext(NavContext);

  const buttonCondition = folded && query ? "open" : !query ? "open" : "closed";

  return (
    <Button
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        folded === true ? setFolded(false) : setFolded(true);
      }}
      animate={buttonCondition}
      initial={false}
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: -200,
        },
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 130,
      }}
      viewBox="0 0 137.361 137.361"
    >
      <motion.g
        fill="#2b2b2b"
        animate={folded ? "open" : "closed"}
        variants={{
          open: {
            rotate: 0,
          },
          closed: {
            rotate: 180,
          },
        }}
      >
        <path d="M83.635 104.474a6.4 6.4 0 01-9.014 0l-31.5-31.6a6.366 6.366 0 01-.2-8.783l31.043-31.137a6.362 6.362 0 119.014 8.981L56.596 68.714l27.039 26.779a6.3 6.3 0 01.072 8.91l-.072.071z" />
        <path
          d="M137.362 68.681a68.67 68.67 0 100 .022zm-10.566 0a58.172 58.172 0 11-17.154-41.193l.116.116a57.615 57.615 0 0117.038 41.077z"
          data-name="Path 1267"
        />
      </motion.g>
    </Button>
  );
}
