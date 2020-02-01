// Components==============
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { QnA } from "../Data/FaqData";
// =========================

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 850px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 20px;
  align-items: center;
  grid-column-gap: 10px;

  @media screen and (min-width: 500px) {
    grid-column-gap: 20px;
  }
`;

const Number = styled.p`
  grid-column: 1;
  grid-row: 1;
  font-size: 24px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const Line = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  height: 0px;
  width: 100%;
  transform: translateY(2px);
  border-bottom: ${({ theme: { gray } }) => gray.s5} 2px solid;
`;

const Sideline = styled(motion.div)`
  justify-self: center;
  grid-column: 1;
  grid-row: 2/4;
  height: 100%;
  width: 3px;
  background: ${({ theme: { primary } }) => primary.s4};
`;

const Question = styled.p`
  grid-column: 2/3;
  grid-row: 2;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => `${spacing.s3} 0 0`};
`;

const Svg = styled.svg`
  grid-column: 3/4;
  grid-row: 2;
  cursor: pointer;
  align-self: start;
  margin-top: ${({ theme: { spacing } }) => `${spacing.s3}`};
`;

const Answer = styled(motion.div)`
  grid-column: 2/4;
  grid-row: 3;
  margin: ${({ theme: { spacing } }) => ` ${spacing.s6} 0 ${spacing.s6}`};

  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }

  ul {
    padding-left: ${({ theme: { spacing } }) => spacing.s2};
  }

  .bold {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s2}`};
  }

  #firstBold {
    margin-top: 0;
  }
`;

const lineVariants = {
  open: {
    scale: 0.975,
    display: "block"
  },
  closed: {
    scale: 0.1,
    transitionEnd: {
      display: "none"
    }
  }
};

const crossVariants = {
  selected: {
    rotate: 0,
    display: "block"
  },
  ignore: {
    rotate: 90,
    transitionEnd: {
      display: "none"
    }
  }
};

const answerVariants = {
  open: {
    height: "auto",
    opacity: 1,
    visibility: "visible"
  },
  closed: {
    height: 0,
    opacity: 0,
    visibility: "hidden"
  }
};

export default function FoldFAQ() {
  const [selected, setSelected] = useState(null);

  const lang = "en";

  const test = QnA.map((edge, index) => {
    const num = index < 9 ? `0${index + 1}` : index + 1;

    return (
      <div key={index}>
        <Grid>
          <Number>{num}</Number>
          <Line />
          <Sideline
            animate={selected === index ? "open" : "closed"}
            variants={lineVariants}
            initial={false}
          />
          <Question>{edge[lang].Q}</Question>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 15 15"
            onClick={() => {
              selected === index ? setSelected(null) : setSelected(index);
            }}
          >
            <g fill="#202020" data-name="Layer 1">
              <motion.path
                animate={selected === index ? "ignore" : "selected"}
                variants={crossVariants}
                initial={false}
                transition={{
                  duration: 0.2
                }}
                d="M5.5 0h4v14.9h-4z"
              />
              <path d="M0 9.5v-4h15v4z" />
            </g>
          </Svg>

          <Answer
            animate={selected === index ? "open" : "closed"}
            variants={answerVariants}
            initial={false}
          >
            {edge[lang].A}
          </Answer>
        </Grid>
      </div>
    );
  });

  return <Wrapper>{test}</Wrapper>;
}
