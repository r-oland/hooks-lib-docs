// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Next = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing[6]};
  display: inline-flex;
  align-items: center;

  &:hover {
    svg {
      transition: 0.5s;
      transform: scale(-1) translateX(-5px);
    }
  }

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    ${({ theme: { fontSize } }) => fontSize.s}
  }

  svg {
    transform: scale(-1);
  }
`;

type props = {
  allHooks: any;
  currentName: string;
};

export default function NextHook({ allHooks, currentName }: props) {
  let currentIndex: number;

  allHooks.forEach((e: any, index: number) => {
    if (e.name === currentName) {
      currentIndex = index;
    }
  });

  const nextHook = allHooks
    .filter((_: any, index: number) => {
      if (index !== allHooks.length - 1) {
        return index === currentIndex + 1;
      }
    })
    .concat(allHooks[0])
    .map((e: any, index: number) => {
      return (
        <Link key={index} to={`/${e?.name?.toLowerCase()}`}>
          <Next>
            <p>{e.name}</p>
            <svg
              viewBox="2.5 2.5 20 20"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.83 19C13.6806 19.0005 13.533 18.9676 13.398 18.9035C13.263 18.8395 13.1441 18.7461 13.05 18.63L8.21998 12.63C8.0729 12.4511 7.99249 12.2267 7.99249 11.995C7.99249 11.7634 8.0729 11.539 8.21998 11.36L13.22 5.36003C13.3897 5.15581 13.6336 5.02739 13.8981 5.00301C14.1625 4.97863 14.4258 5.06029 14.63 5.23003C14.8342 5.39977 14.9626 5.64368 14.987 5.90811C15.0114 6.17253 14.9297 6.43581 14.76 6.64003L10.29 12L14.61 17.36C14.7323 17.5068 14.8099 17.6856 14.8338 17.8751C14.8577 18.0647 14.8268 18.2571 14.7447 18.4296C14.6627 18.6021 14.5329 18.7475 14.3708 18.8486C14.2087 18.9497 14.021 19.0023 13.83 19Z"
                fill="#2B2B2B"
              />
            </svg>
          </Next>
        </Link>
      );
    })[0];

  return <>{nextHook}</>;
}
