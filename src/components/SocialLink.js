import React from "react";
import styled from "styled-components";

export default function SocialLink({ title, to, size = 40, ...otherProps }) {
  return (
    <IconContainer href={to} size={size} {...otherProps}>
      {title}
    </IconContainer>
  );
}

const IconContainer = styled("a")`
  text-decoration: none;
  color: ${({ theme }) => theme.light};
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 2rem;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
