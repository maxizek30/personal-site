import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';


const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

DarkModeProvider.propTypes = {
    children: PropTypes.node,
    value: PropTypes.shape({
        darkMode: PropTypes.bool,
        toggleDarkMode: PropTypes.func
    })
};
export const useDarkMode = () => useContext(DarkModeContext);