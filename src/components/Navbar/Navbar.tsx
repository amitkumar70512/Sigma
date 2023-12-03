// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';

interface NavbarLinksProps {
    isMobileMenuOpen: boolean;
}

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavbarLogo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavbarLinks = styled.div<NavbarLinksProps>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
    flex-direction: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'column' : 'row')};
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
  }
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <NavbarContainer>
            <NavbarLogo>Logo</NavbarLogo>
            <NavbarLinks isMobileMenuOpen={isMobileMenuOpen}>
                <NavbarLink href="/home">Home</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="/services">Services</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink>
            </NavbarLinks>
            <button onClick={toggleMobileMenu}>Toggle Menu</button>
        </NavbarContainer>
    );
};

export default Navbar;
