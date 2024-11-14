import React, { useState } from 'react';
import { NavLink } from './types';
import { Logo, NavbarContainer, NavLinks, NavItem, HamburgerIcon, MobileNav } from './styles';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const links: NavLink[] = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Services' },
        { id: 3, name: 'About' },
        { id: 4, name: 'Dashboard', navigate: "/mvp-notarizer/dashboard" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (navigateTo?: string) => {
        if (navigateTo) navigate(navigateTo);
        setIsOpen(false);
    };

    return (
        <NavbarContainer>
            <Logo>Notarizer</Logo>
            <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
            <NavLinks isOpen={isOpen}>
                {links.map((li) => (
                    <NavItem key={li.id} onClick={() => handleLinkClick(li.navigate)}>{li.name}</NavItem>
                ))}
            </NavLinks>
            {isOpen && <MobileNav onClick={toggleMenu} />}
        </NavbarContainer>
    );
};

export default Navbar;
