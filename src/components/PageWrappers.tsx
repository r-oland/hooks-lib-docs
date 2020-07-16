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

  ${({ theme: { mediaQ } }) => mediaQ.desktopS} {
    max-width: ${({ isHookPage }) => isHookPage && "30vw"};
    height: 100vh;
    overflow: auto;
  }
`;

export function ContentWrapper({ element }: pageProps) {
  const { slug } = useContext(AppContext);
  const isHookPage = typeof slug !== "undefined";

  return <ContentWrap isHookPage={isHookPage}>{element}</ContentWrap>;
}

const PlaygroundWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export function PlayGroundWrapper({ props }: pageProps) {
  const duration = 0.3;
  const sandbox = props?.data?.sanityHooks?.sandbox;

  return (
    <PlaygroundWrap>
      <AnimatePresence>
        <motion.div
          style={{ height: "100%" }}
          key={props.path}
          initial={{ x: "100vw" }}
          animate={{
            x: "0vw",
            transition: {
              delay: duration,
              duration: duration,
              when: "beforeChildren",
            },
          }}
          exit={{ x: "100vw", transition: { duration: duration } }}
          transition={{ duration: 1 }}
        >
          <Playground sandbox={sandbox} />
        </motion.div>
      </AnimatePresence>
    </PlaygroundWrap>
  );
}
