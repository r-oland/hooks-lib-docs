// Components==============
import React from "react";
import styled from "styled-components";
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
  margin-left: ${({ theme: { spacing } }) => spacing[1]};
`;

const DValue = styled.div`
  color: ${({ theme: { primary } }) => primary[3]};
  font-size: 15px;
  font-style: italic;
  margin-bottom: ${({ theme: { spacing } }) => spacing[0]};

  span {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    font-size: 15px;
  }
`;

const Title = styled.p`
  font-size: 17px;
  margin: ${({ theme: { spacing } }) => `${spacing[3]} 0 ${spacing[0]} `};
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
      {propArg.length !== 0 && (
        <>
          <Title>{title}</Title>
          {propArgs}
        </>
      )}
    </Wrapper>
  );
}
