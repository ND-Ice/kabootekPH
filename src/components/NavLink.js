import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function NavLink({ children, to, ...otherProps }) {
  return (
    <CustomLink to={to} {...otherProps}>
      {children}
    </CustomLink>
  );
}

const CustomLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.dark};
  cursor: pointer;
  margin: 2rem 0;
  transition: all 150ms ease;

  @media (min-width: 1100px) {
    margin: 0 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
  }
`;
