import React from 'react';
import { NavLink } from './types';
import { Logo, NavbarContainer, NavItem, NavLinks } from './styles';

const Navbar: React.FC = () => {
    const links: NavLink[] = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Services' },
        { id: 3, name: 'Contact' },
        { id: 4, name: 'About' }
    ];

    return (
        <NavbarContainer>
        <Logo>Notarizer</Logo>
        <NavLinks>
        {
        links.map((li) => (
            <NavItem key= { li.id } > { li.name } </NavItem>
        ))
    }
    </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;