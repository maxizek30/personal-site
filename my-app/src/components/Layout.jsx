import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import DarkModeToggle from "./DarkModeToggle";

const Layout = ({ children }) => {
    return(
        <div className="layout">
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </header>
            <main>{children}</main>
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