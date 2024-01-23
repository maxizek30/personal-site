import { useDarkMode } from "../context/DarkModeContext";
import "../styles/DarkModeToggle.css"
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [buttonText, setbuttonText] = useState(darkMode ? "Dark Mode" : "Light Mode");

    useEffect(() => {
        if(darkMode) {
            setbuttonText("Dark Mode");
        } else {
            setbuttonText("Light Mode");
        }
    }, [darkMode]);
    

    return (
        <>
            <div className="buttonContainer">
                {buttonText}
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={darkMode} 
                        onChange={toggleDarkMode} 
                        readOnly
                    />
                    <div className="slider round"></div>
                </label>
            </div>
        </>
    );
};

export default DarkModeToggle;
