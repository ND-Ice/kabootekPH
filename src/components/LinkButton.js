import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LinkButton({ to, children, ...otherProps }) {
  return (
    <CustomLink to={to} {...otherProps}>
      {children}
    </CustomLink>
  );
}

const CustomLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.light};
  padding: 1.5rem 4rem;
  font-weight: 700;
  border-radius: 1.5rem;
  border: 4px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease;

  &:hover {
    background: white;
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;
