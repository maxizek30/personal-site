import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import DarkModeToggle from "./DarkModeToggle";
import "../styles/styles.css"

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <header className="header">
                <div className="header-title">Max Lopez</div>
                <div className="header-links">
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
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