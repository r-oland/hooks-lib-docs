// Components==============
import TransitionLink from "gatsby-plugin-transition-link";
import React from "react";
// =========================

export default function TLink({ to, children }) {
  return (
    <TransitionLink
      to={to}
      entry={{
        // set delay for timing, length should be 1
        delay: 0.3
      }}
      exit={{
        length: 1
      }}
    >
      {children}
    </TransitionLink>
  );
}
