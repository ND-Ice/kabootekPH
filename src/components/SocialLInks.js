import React from "react";
import styled from "styled-components";

// components import
import { socialLinksLocal } from "../utils/data";
import { SocialLink } from "./";

export default function SocialLInks({ links }) {
  return (
    <Wrapper>
      <Header>Follow</Header>
      {links?.length !== 0
        ? links?.map((link) => (
            <SocialLink
              key={link?.id}
              target="_blank"
              title={link?.title}
              href={link?.href}
            />
          ))
        : socialLinksLocal?.map((link, index) => (
            <SocialLink
              key={index}
              target="_blank"
              title={link?.title}
              href={link?.href}
            />
          ))}
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  text-align: center;
  max-width: 300px;
  display: grid;
  line-height: 40px;

  @media (min-width: 1240px) {
    width: 300px;
  }
`;

const Header = styled("h3")`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 5rem;
`;
