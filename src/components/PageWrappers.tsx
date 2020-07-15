// Components==============
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Layout/Layout";
import { pageProps } from "../page";
import Playground from "./Playground";
// =========================

type ContentWrap = {
  isHookPage: boolean;
};

const ContentWrap = styled.div<ContentWrap>`
  width: 100%;
  height: 100%;

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    max-width: ${({ isHookPage }) => isHookPage && "30vw"};
  }
`;

export function ContentWrapper({ element, props }: pageProps) {
  const duration = 0.5;
  const { slug } = useContext(AppContext);
  const isHookPage = typeof slug !== "undefined";

  return (
    <ContentWrap isHookPage={isHookPage}>
      <AnimatePresence>
        <motion.div
          key={props.path}
          style={{ height: "100%" }}
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
  height: 100vh;
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
