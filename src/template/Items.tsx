// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
`;

const Item = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};

  .argument {
    display: inline;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
  }

  .description {
    display: inline;
    padding-left: ${({ theme: { spacing } }) => spacing[0]};
    ${({ theme: { fontSize } }) => fontSize.xs}
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8px 1fr;
  align-items: center;
  grid-column-gap: ${({ theme: { spacing } }) => spacing[4]};
`;

const Title = styled.p`
  ${({ theme: { fontSize } }) => fontSize.l}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

type props = {
  content: { arguments: string; description: string }[];
  title: string;
};

export default function Items({ content, title }: props) {
  const items = content.map((e: any, index: number) => {
    return (
      <Item key={index}>
        <Grid>
          <div
            style={{
              height: 2,
              width: "100%",
              background: "black",
              opacity: 0.3,
            }}
          />
          <div>
            <p className="argument">{e.argument || e.value}: </p>
            <p className="description">{e.description}</p>
          </div>
        </Grid>
      </Item>
    );
  });

  return (
    <Wrapper>
      <Title>{title}</Title>
      {items}
    </Wrapper>
  );
}
