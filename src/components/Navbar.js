import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

import { LinkButton, NavLink } from ".";
import { navItems } from "../utils/data";
import useScrolled from "../hooks/useScolled";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const { isScrolled } = useScrolled();

  return (
    <Nav isScrolled={isScrolled} isToggle={isToggle}>
      <Brand to="home">eWallet</Brand>
      <TogglerContainer>
        <FiMenu
          className="nav__toggler"
          onClick={() => setIsToggle(!isToggle)}
        />
      </TogglerContainer>
      <LinkContainer isToggle={isToggle}>
        {navItems.map((navItem) => (
          <NavLink
            key={navItem.dest}
            to={navItem.dest}
            spy={true}
            smooth={true}
            onClick={() => setIsToggle(false)}
          >
            {navItem.title}
          </NavLink>
        ))}
        <LinkButton to="/login">Login</LinkButton>
      </LinkContainer>
    </Nav>
  );
}

const Nav = styled("nav")`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  z-index: 10;
  background: ${({ theme, isScrolled, isToggle }) =>
    isScrolled | isToggle ? theme.light_color : "transparent"};
  transition: all 300ms ease;

  @media (min-width: 800px) {
    padding: 2rem 10rem;
  }
`;

const TogglerContainer = styled("div")`
  display: flex;
  justify-content: flex-end;

  & .nav__toggler {
    width: 30px;
    height: 30px;
    cursor: pointer;

    @media (min-width: 1100px) {
      display: none;
    }
  }
`;
const LinkContainer = styled("div")`
  width: 100%;
  max-height: ${({ isToggle }) => (!isToggle ? 0 : "100vh")};
  transition: all 300ms ease;
  background: white;
  overflow: hidden;
  padding: ${({ isToggle }) => (!isToggle ? 0 : "1rem")};
  text-align: center;

  @media (min-width: 1100px) {
    display: flex;
    width: min-content;
    background: transparent;
    max-height: 100vh;
    align-items: center;
    padding: 1rem;
    gap: 4rem;
  }
`;

const Brand = styled(Link)`
  font-size: 2.4rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.dark_color};
`;
