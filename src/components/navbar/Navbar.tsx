import React from 'react';
import { NavLink } from './types';
import { Logo, NavbarContainer, NavItem, NavLinks } from './styles';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const links: NavLink[] = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Services' },
        { id: 3, name: 'About' },
        { id: 4, name: 'Dashboard', navigate: "/mvp-notarizer/dashboard" },
    ];

    return (
        <NavbarContainer>
            <Logo>Notarizer</Logo>
            <NavLinks>
                {
                    links.map((li) => (
                        <NavItem key={li.id} onClick={() => navigate(li.navigate ?? "")}> {li.name} </NavItem>
                    ))
                }
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;