import React from "react";
import styled from "styled-components";

export default function Icon({
  icon: Icon,
  size = 30,
  color = "#00BFA6",
  ...otherProps
}) {
  return (
    <Component size={size} color={color} {...otherProps}>
      <Icon className="component__icon" />
    </Component>
  );
}

const Component = styled.span`
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
