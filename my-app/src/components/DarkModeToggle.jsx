import { useDarkMode } from "../context/DarkModeContext";
import "../styles/DarkModeToggle.css"

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <label className="switch">
            <input 
                type="checkbox" 
                checked={darkMode} 
                onChange={toggleDarkMode} 
                readOnly
            />
            <div className="slider round"></div>
        </label>
    );
};

export default DarkModeToggle;
