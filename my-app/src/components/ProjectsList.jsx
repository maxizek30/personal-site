import "../styles/ProjectsList.css"
import { useDarkMode } from "../context/DarkModeContext";

const ProjectsList = ({ projects }) => {

    const { darkMode } = useDarkMode(); 

    const projectdescriptionClass = `Project-Description ${darkMode ? 'dark-mode' : ''}`;

    return (
        <>
           <ul className="Projects-List">
                {projects.map(project => (
                    <li key={project.name}>
                        <div className="Project-Name">{project.name}</div>
                        <div className={projectdescriptionClass}>{project.description}</div>
                    </li>
                ))}
            </ul> 
        </>
    );
}
export default ProjectsList;
