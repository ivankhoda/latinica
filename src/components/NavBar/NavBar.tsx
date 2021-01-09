import * as React from "react";
import styled from "styled-components/macro";
import Routes from "../Routes/Routes";
import Menu from "../Styled/Menu";

const NavigationBar = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const MenuItem = styled.li`
  text-decoration: none;
  list-style-type: none;
`;

const StyledLink = styled.a`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const NavBar = () => {
  return (
    <NavigationBar>
      <Menu>
        <MenuItem>
          <StyledLink href="/about">O proektje</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink href="/contacts">Kontakty</StyledLink>
        </MenuItem>
      </Menu>
      <Routes />
    </NavigationBar>
  );
};

export default NavBar;
