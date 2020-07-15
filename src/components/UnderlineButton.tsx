// Components==============
import { motion } from "framer-motion";
import { useHover } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Btn = styled.button`
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
  z-index: 2;
`;

const Bar = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background: ${({ theme: { color } }) => color.primary};
  opacity: 0.2;
  z-index: -2;
`;

type props = {
  children: React.ReactNode | string;
  className?: string;
  barPosition?: string;
  as?: any;
};

export function UnderlineButton({
  children,
  className,
  barPosition = "70%",
  as = "button",
}: props) {
  const [hover, watch] = useHover();

  return (
    <Btn className={className} {...watch} as={as}>
      {children}
      <Bar
        initial={{
          y: barPosition,
        }}
        animate={hover ? { y: 0 } : { y: barPosition }}
        whileTap={{ scale: 0.8 }}
      />
    </Btn>
  );
}
