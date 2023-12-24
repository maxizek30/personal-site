import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../context/DarkModeContext";
import "../styles/Layout.css"

const Layout = ({ children }) => {

    const { darkMode } = useDarkMode(); // get the current dark mode state

    const layoutClass = darkMode ? 'layout dark-mode' : 'layout';
    const headerClass = `header ${darkMode ? 'dark-mode' : ''}`;
    const footerClass = `footer ${darkMode ? 'dark-mode' : ''}`;

    return(
        <div className={layoutClass}>
            <header className={headerClass}>
                <div className="header-title">Max Lopez</div>
                <div className="header-links">
                    <NavLink 
                    to="/"
                    className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/portfolio"
                    className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink 
                    to="/contact"
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