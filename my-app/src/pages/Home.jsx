import "../styles/Home.css"
import { useDarkMode } from "../context/DarkModeContext"

function Home() {

  const { darkMode } = useDarkMode();

  const welcomedescriptionClass = `Welcome-Description ${darkMode ? 'dark-mode' : ''}`;

  return (
    <> 
      <div className="Welcome-Title">Welcome.</div>
      <div className={welcomedescriptionClass}>
        <div className="Welcome-Vertical-Line" />
        My name is Max Lopez.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et M
      </div>
    </>
  )
}

export default Home