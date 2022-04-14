import React from "react";
import styled from "styled-components";

export default function Icon({ icon: Icon, size = 30, color = "#00BFA6" }) {
  return (
    <Component size={size} color={color}>
      <Icon className="component__icon" />
    </Component>
  );
}

const Component = styled.div`
  display: inline-block;

  & .component__icon {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    color: ${({ color }) => color};
    cursor: pointer;
    transition: all 200ms ease;
  }

  & .component__icon:hover {
    transform: scale(1.2);
  }
`;