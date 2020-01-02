// Components==============
import React from "react";
import posed from "react-pose";
// =========================

const Effect = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1000 } }
});

export default function TransitionEffect({ children, mount }) {
  return <Effect pose={mount ? "visible" : "hidden"}>{children}</Effect>;
}
