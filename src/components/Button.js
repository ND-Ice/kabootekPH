import React from "react";
import styled from "styled-components";

export default function Button({ children, ...otherProps }) {
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

const CustomButton = styled("button")`
  padding: 1.5rem 4rem;
  background: ${({ theme }) => theme.accent_color};
  color: ${({ theme }) => theme.light_color};
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 2rem;
  transition: all 300ms ease;
  border: 4px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: none;
    border-color: ${({ theme }) => theme.accent_color};
    color: ${({ theme }) => theme.accent_color};
  }
`;
