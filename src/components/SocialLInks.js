import React from "react";
import styled from "styled-components";

// components import
import { SocialLink } from "./";

export default function SocialLInks() {
  return (
    <Wrapper>
      <Header>Follow</Header>

      <SocialLink title="Facebook" />
      <SocialLink title="Instagram" />
      <SocialLink title="Twitter" />
      <SocialLink title="Youtube" />
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
