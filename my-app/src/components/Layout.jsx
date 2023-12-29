import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";
import "../styles/Layout.css"

const Layout = ({ children }) => {

    const { darkMode } = useDarkMode(); // get the current dark mode state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const layoutClass = darkMode ? 'layout dark-mode' : 'layout';
    const headerClass = `header ${darkMode ? 'dark-mode' : ''}`;
    const footerClass = `footer ${darkMode ? 'dark-mode' : ''}`;
    const headerLinksClass = `header-links ${darkMode ? 'dark-mode' : ''} ${isMenuOpen ? 'active' : ''}`;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return(
        <div className={layoutClass}>
            <header className={headerClass}>
                <div className="header-top">
                    <div className="header-title">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Max Lopez</Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>☰</div>
                </div>
                <div className={headerLinksClass}>
                    <NavLink 
                    to="/"
                    onClick={toggleMenu}
                    className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/portfolio"
                    onClick={toggleMenu}
                    className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink 
                    to="/contact"
                    onClick={toggleMenu}
                    className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Contact
                    </NavLink>
                </div>
            </header>
            <div className="main-content">{children}</div>
            <footer className={footerClass}>
                <DarkModeToggle />
            </footer>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node,
};
export default Layout;