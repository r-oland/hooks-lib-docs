// Components==============
import TransitionLink from "gatsby-plugin-transition-link";
import React from "react";
// =========================

export default function TLink({ to, children }) {
  return (
    <TransitionLink
      to={to}
      entry={{
        delay: 0
      }}
      exit={{
        length: 0
      }}
    >
      {children}
    </TransitionLink>
  );
}
