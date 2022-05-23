import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export default function ImageAdd({ onAdd }) {
  return (
    <Box onClick={onAdd}>
      <IconWrapper>
        <FiPlus />
      </IconWrapper>
    </Box>
  );
}

const Box = styled.div`
  min-width: 300px;
  min-height: 300px;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  background: ${({ theme }) => theme.accent_color};
  color: ${({ theme }) => theme.light_color};
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 4rem;
  transition: all 300ms ease;
  border: 2px solid ${({ theme }) => theme.light_color};

  &:hover {
    background: ${({ theme }) => theme.light_color};
    color: ${({ theme }) => theme.accent_color};
  }
`;
