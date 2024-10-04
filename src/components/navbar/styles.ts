import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  width: 100%;
`;

const Logo = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

const NavItem = styled.li`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
    border-radius: 3px;
  }
`;

export {NavbarContainer, Logo, NavLinks, NavItem}