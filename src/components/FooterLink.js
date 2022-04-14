import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function FooterLink({ to, children, ...otherProps }) {
  return (
    <CustomLink to={to} {...otherProps}>
      {children}
    </CustomLink>
  );
}

const CustomLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  transition: all 300ms ease;
  line-height: 40px;
  color: ${({ theme }) => theme.light};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
