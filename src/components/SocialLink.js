import React from "react";
import styled from "styled-components";

export default function SocialLink({ title, href, ...otherProps }) {
  return (
    <IconContainer href={href} {...otherProps}>
      {title}
    </IconContainer>
  );
}

const IconContainer = styled("a")`
  text-decoration: none;
  color: ${({ theme }) => theme.light_color};
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.accent_color};
  }
`;
