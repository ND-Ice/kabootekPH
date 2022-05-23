import React from "react";
import styled from "styled-components";
import { FaUserAstronaut, FaArrowCircleRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import authApi from "../../api/auth";
import SidebarItem from "./SidebarItem";
import { sidebarLinks } from "../../utils/data";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      toast.loading("Loading...");
      const response = await authApi.logout();
      localStorage.removeItem("auth-token");
      toast.dismiss();
      toast.success(response?.data?.message);
      navigate("/");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later"
      );
    }
  };
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
            onClick={() => navigate(link.to)}
            isActive={link.to === location.pathname}
          />
        ))}
      </div>

      <SidebarItem
        title="Sign out"
        icon={FaArrowCircleRight}
        onClick={handleLogout}
      />
    </Component>
  );
}

const Component = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.accent_color};
`;

const Header = styled.div`
  padding: 4rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.light_color};

  & .header__icon {
    width: 30px;
    height: 30px;
    margin-right: 3rem;
    margin-left: 2rem;
  }
`;
