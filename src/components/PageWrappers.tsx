// Components==============
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageProps } from "../page";
import Playground from "./Playground";
// =========================

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    max-width: 30vw;
  }
`;

export function ContentWrapper({ element, props }: pageProps) {
  const duration = 0.5;

  return (
    <ContentWrap>
      <AnimatePresence>
        <motion.div
          style={{ height: "100%" }}
          key={props.path}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: duration,
              duration: duration,
              when: "beforeChildren",
            },
          }}
          exit={{ opacity: 0, transition: { duration: duration } }}
          transition={{ duration: 1 }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    </ContentWrap>
  );
}

const PlaygroundWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export function PlayGroundWrapper({ props }: pageProps) {
  const duration = 0.4;
  const sandbox = props?.data?.sanityHooks?.sandbox;

  return (
    <PlaygroundWrap>
      <AnimatePresence>
        <motion.div
          style={{ height: "100%" }}
          key={props.path}
          initial={{ x: "100%" }}
          animate={{
            x: "0%",
            transition: {
              duration: duration,
              when: "beforeChildren",
            },
          }}
          exit={{ transition: { duration: duration } }}
          transition={{ duration: 1 }}
        >
          <Playground sandbox={sandbox} />
        </motion.div>
      </AnimatePresence>
    </PlaygroundWrap>
  );
}
