// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import SymbolImp from "./Symbol.inline.svg";
// =========================

const Wrapper = styled.div`
  position: relative;
`;

const SymbolSvg = styled(SymbolImp)`
  width: 20px;

  #changeColor {
    fill: ${({ theme: { primary } }) => primary.s4};
  }
`;

const Card = styled.div`
  position: absolute;
  /* left: 0; */
  opacity: ${({ cardIsVisible }) => (cardIsVisible === "true" ? `1` : "0")};

  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  visibility: ${({ cardIsVisible }) =>
    cardIsVisible === "true" ? `visible` : "hidden"};
  background-color: ${({ theme: { primary } }) => primary.s7};

  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  transition: 0.2s ease-in-out;
  width: 300px;
  z-index: 100;

  p {
    padding: ${({ theme: { spacing } }) => `${spacing.s4}`};
    color: ${({ theme: { white } }) => white};
  }
`;

export default function QuestionAddOn({ children }) {
  const [cardIsVisible, setCardIsVisible] = useState("false");

  const handleChange = () => {
    const Query = window.matchMedia("(min-width: 800px)");

    if (cardIsVisible === "false" && Query.matches) {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  const handleClickChange = () => {
    const Query = window.matchMedia("(max-width: 800px)");

    if (cardIsVisible === "false") {
      setCardIsVisible("true");
    } else if (cardIsVisible === "true" && Query.matches) {
      setCardIsVisible("false");
    }
  };

  return (
    <Wrapper
      onMouseOver={handleChange}
      onMouseOut={handleChange}
      onClick={handleClickChange}
    >
      <SymbolSvg cardisvisible={cardIsVisible} />
      <Card cardIsVisible={cardIsVisible}>{children}</Card>
    </Wrapper>
  );
}
