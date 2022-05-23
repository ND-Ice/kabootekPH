import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SidebarItem({
  title,
  icon: Icon,
  to,
  isActive,
  onClick,
}) {
  return (
    <Component to={to} active={isActive} onClick={onClick}>
      {Icon && <Icon className="sidebar__icon" />}
      {title}
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  transition: all 300ms ease;
  color: ${({ theme }) => theme.light_color};
  background: ${({ theme, active }) =>
    active ? theme.active_color : theme.accent_color};

  &:hover {
    background: ${({ theme }) => theme.active_color};
  }

  .sidebar__icon {
    width: 30px;
    height: 30px;
    margin-right: 3rem;
    margin-left: 2rem;
  }
`;
