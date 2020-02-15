// Components==============
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../style/Mixins";
// =========================

const TextArea = styled(motion.span)`
  ${flexUnit(2, 17, 22, "vw", "font-size")};
`;

const variants = {
  done: { opacity: 1 },
  changing: { opacity: 0 }
};

export default function TextSwitchAnimation() {
  // unmount with intersection observer to prevent unnecessary reerenders

  const A = "Wait a second...";
  const B = "Wow cool effect!";

  const [IsChanging, setIsChanging] = useState(false);
  const [Content, setContent] = useState(A);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsChanging(true);
    }, 4000);
    const timer2 = setTimeout(() => {
      Content === A ? setContent(B) : setContent(A);
      setIsChanging(false);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [Content]);

  return (
    <TextArea animate={IsChanging ? "changing" : "done"} variants={variants}>
      {Content}
    </TextArea>
  );
}
