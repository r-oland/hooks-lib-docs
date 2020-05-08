// Components==============
import React from "react";
import styled from "styled-components";
import { L } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  max-width: 750px;
`;

const Flex = styled.div`
  display: flex;
`;

const Prop = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const Description = styled.p`
  margin-left: ${({ theme: { spacing } }) => spacing.s2};
`;

const DValue = styled.div`
  color: ${({ theme: { primary } }) => primary.s4};
  font-size: 15px;
  font-style: italic;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s1};

  span {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    font-size: 15px;
  }
`;

const Title = styled(L)`
  margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s1} `};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function PropArgs({ propArg, title }) {
  const propArgs = propArg.map((e, index) => {
    const prop = e.prop;
    const arg = e.argument;
    const description = e.description;
    const defaultValue = e.defaultValue;

    return (
      <div key={index}>
        <Flex>
          {prop && (
            <>
              <Prop>{prop}</Prop>:
            </>
          )}
          {arg && (
            <>
              <Prop>{arg}</Prop>:
            </>
          )}
          <Description>{description}</Description>
        </Flex>
        {defaultValue && (
          <DValue>
            <span>Default value: </span>
            {defaultValue}
          </DValue>
        )}
      </div>
    );
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      {propArgs}
    </Wrapper>
  );
}
