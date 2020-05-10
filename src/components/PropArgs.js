// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  max-width: 750px;
  background: ${({ theme: { gray } }) => gray[0]};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[4]}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.xs};

  .title,
  .description {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }

  .title {
    grid-column: 1;
  }

  .description {
    grid-column: 2;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;

  @media screen and (min-width: 450px) {
    grid-template-columns: 0.3fr 1fr;
  }
`;

const Item = styled(Grid)`
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  border-bottom: solid 1px ${({ theme: { gray } }) => gray[2]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

const Prop = styled.p`
  grid-column: 1;
  align-self: center;

  ${({ theme: { fontSize } }) => fontSize.s}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

const Description = styled.div`
  grid-column: 2;

  p {
    ${({ theme: { fontSize } }) => fontSize.s}
  }
`;

const DValue = styled.div`
  color: ${({ theme: { primary } }) => primary[6]};
  ${({ theme: { fontSize } }) => fontSize.xs}
  font-style: italic;
  grid-column: 2;

  span {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    ${({ theme: { fontSize } }) => fontSize.xs}
  }
`;

export default function PropArgs({ propArg, title }) {
  const propArgs = propArg.map((e, index) => {
    const prop = e.prop;
    const arg = e.argument;
    const description = e.description;
    const defaultValue = e.defaultValue;

    return (
      <Item key={index}>
        {prop && <Prop>{prop}</Prop>}
        {arg && <Prop>{arg}</Prop>}
        <Description>
          {defaultValue && (
            <DValue>
              <span>Default value: </span>
              {defaultValue}
            </DValue>
          )}
          <p>{description}</p>
        </Description>
      </Item>
    );
  });

  return (
    <>
      {propArg.length !== 0 && (
        <Wrapper>
          <Grid style={{ marginBottom: "1em" }}>
            <div className="title">{title}</div>
            <div className="description">Description</div>
          </Grid>
          {propArgs}
        </Wrapper>
      )}
    </>
  );
}
