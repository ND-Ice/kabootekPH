import React from "react";
import styled from "styled-components";
import { FaUserAstronaut, FaArrowCircleRight } from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import { sidebarLinks } from "../../utils/data";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  return (
    <Component>
      <Header>
        <FaUserAstronaut className="header__icon" />
        Admin
      </Header>
      <div>
        {sidebarLinks.map((link, index) => (
          <SidebarItem
            key={index}
            title={link.title}
            icon={link.icon}
            to={link.to}
            isActive={link.to === location.pathname}
          />
        ))}
      </div>

      <SidebarItem title="Sign out" icon={FaArrowCircleRight} to="/" />
    </Component>
  );
}

const Component = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.accent};
`;

const Header = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.light};

  & .header__icon {
    width: 30px;
    height: 30px;
    margin-right: 3rem;
    margin-left: 2rem;
  }
`;
