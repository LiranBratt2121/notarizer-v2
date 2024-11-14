import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 2; /* Ensure navbar is above the overlay */
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

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    gap: 10px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    transition: all 0.3s ease;
    z-index: 3; /* Place nav items above overlay */
  }
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

  @media (max-width: 768px) {
    &:hover {
      background-color: unset;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 3; /* Ensure hamburger icon is above overlay */
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1; /* Ensure overlay is behind nav items */
  }
`;

export { NavbarContainer, Logo, NavLinks, NavItem, HamburgerIcon, MobileNav };
