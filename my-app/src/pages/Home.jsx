import "../styles/Home.css";
import { useDarkMode } from "../context/DarkModeContext";

function Home() {
  const { darkMode } = useDarkMode();

  const welcomedescriptionClass = `Welcome-Description ${
    darkMode ? "dark-mode" : ""
  }`;

  return (
    <>
      <div className="Welcome-Title">Welcome.</div>
      <div className={welcomedescriptionClass}>
        <div className="Welcome-Vertical-Line" />
        My name is Max Lopez, a junior at Pacific Lutheran University majoring
        in Computer Science. Eager to dive deep into the world of technology,
        I'm all about learning and applying foundational concepts, exploring
        vast possibilities, and contributing to innovative solutions.
      </div>
    </>
  );
}

export default Home;
