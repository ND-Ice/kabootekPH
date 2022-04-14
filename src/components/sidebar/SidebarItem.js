import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SidebarItem({ title, icon: Icon, to, isActive }) {
  return (
    <Component to={to} active={isActive}>
      {Icon && <Icon className="sidebar__icon" />}
      {title}
    </Component>
  );
}

const Component = styled(Link)`
  display: flex;
  padding: 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  transition: all 300ms ease;
  color: ${({ theme }) => theme.light};
  background: ${({ theme, active }) => (active ? theme.active : theme.accent)};

  &:hover {
    background: ${({ theme }) => theme.active};
  }

  .sidebar__icon {
    width: 30px;
    height: 30px;
    margin-right: 3rem;
    margin-left: 2rem;
  }
`;
