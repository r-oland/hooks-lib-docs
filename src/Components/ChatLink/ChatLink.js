// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { S } from "../../style/Mixins";
import Arrow from "./Arrow.svg";
import Cross from "./Cross.svg";
import LeftSvg from "./Left.svg";
import RightSvg from "./Right.svg";
// =========================

const ChatWrapper = styled.div`
  margin: 0 auto;
  background: ${({ theme: { white } }) => white};
  border-radius: 20px;
  overflow: hidden;
  max-width: 900px;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
`;

const Top = styled.div`
  background: ${({ theme: { gray } }) => gray.s9};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => ` ${spacing.s2} ${spacing.s5} `};

  @media screen and (min-width: 950px) {
    padding: ${({ theme: { spacing } }) => ` ${spacing.s5} ${spacing.s5} `};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
  }

  p {
    font-size: 18px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: white;
    padding-left: ${({ theme: { spacing } }) => spacing.s5};

    @media screen and (min-width: 950px) {
      padding-left: ${({ theme: { spacing } }) => spacing.s10};
      font-size: 20px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ArrowSVG = styled.img`
  margin-right: ${({ theme: { spacing } }) => spacing.s6};
  width: 16px;
  height: 16px;
`;

const CrossSVG = styled.img`
  width: 14px;
`;

const Circle = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 50px;
  height: 50px;

  @media screen and (min-width: 950px) {
    border: ${({ theme: { gray } }) => gray.s9} solid 6px;
    position: absolute;
    top: -8px;
    width: 85px;
    height: 85px;
  }
`;

const Image = styled(Img)`
  width: 120px;
  position: relative;
  right: 30px;
`;
const ChatArea = styled.div`
  padding: ${({ theme: { spacing } }) =>
    ` ${spacing.s7} ${spacing.s3} ${spacing.s5}`};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    padding: ${({ theme: { spacing } }) =>
      ` ${spacing.s6} ${spacing.s7} ${spacing.s6}`};
  }

  @media screen and (min-width: 950px) {
    padding: ${({ theme: { spacing } }) =>
      ` ${spacing.s6} ${spacing.s9} ${spacing.s6}`};
  }
`;

const BoxStyling = styled(motion.div)`
  background-size: 100% 100%;
  width: 100%;
  max-width: 330px;
  background-repeat: no-repeat;
  height: 100%;
  text-align: left;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};

  @media screen and (min-width: 950px) {
    margin-bottom: -20px;
  }
`;

const Left = styled(BoxStyling)`
  background-image: url(${LeftSvg});
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} ${spacing.s4} ${spacing.s1} ${spacing.s6}`};
`;

const Right = styled(BoxStyling)`
  background-image: url(${RightSvg});
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} ${spacing.s6} ${spacing.s1} ${spacing.s4}`};
  margin-left: auto;
  @media screen and (min-width: 950px) {
    transform: translateY(-30px);
  }
`;

const Sender = styled.p`
  padding: ${({ theme: { spacing } }) => `0 ${spacing.s3} `};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { gray } }) => gray.s7};
`;

const Message = styled(S)`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} 0 ${spacing.s1} ${spacing.s6}`};
`;

function Me({ children, to }) {
  return (
    <Link to={to}>
      <Left>
        <Sender>Me</Sender>
        <Message>{children}</Message>
      </Left>
    </Link>
  );
}

function Roland({ children, to }) {
  return (
    <Link to={to}>
      <Right>
        <Sender>Roland</Sender>
        <Message>{children}</Message>
      </Right>
    </Link>
  );
}

export default function ChatLink({ stock }) {
  return (
    <ChatWrapper>
      <Top>
        <Flex>
          <Circle>
            <Image fluid={stock} alt="StockImg" />
          </Circle>
          <p>Roland</p>
        </Flex>
        <Flex>
          <ArrowSVG src={Arrow} alt="Arrow" />
          <CrossSVG src={Cross} alt="Cross" />
        </Flex>
      </Top>
      <ChatArea>
        <Me to="/#">How much does a JAMstack site cost?</Me>
        <Roland to="/#">
          Straight to the point huh, Sure! Click me to find out.
        </Roland>
        <Me to="/#">Why should my site be bould with the JAMstack?</Me>
        <Roland to="/#"> Well I'm glad you asked, click me to find out.</Roland>
        <Me to="/#">Are you the right person for my site?</Me>
        <Roland to="/#">
          I probably am, but their are a few exceptions. click me to find out
        </Roland>
      </ChatArea>
    </ChatWrapper>
  );
}
