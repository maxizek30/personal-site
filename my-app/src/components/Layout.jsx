import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import DarkModeToggle from "./DarkModeToggle";
import "../styles/styles.css"

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <header className="header">
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
            <footer className="footer">
                <DarkModeToggle />
            </footer>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node,
};
export default Layout;