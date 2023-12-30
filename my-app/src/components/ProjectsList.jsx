import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/ProjectsList.css"
import { useDarkMode } from "../context/DarkModeContext";

const ProjectsList = ({ projects }) => {
    const { darkMode } = useDarkMode(); 
    const projectdescriptionClass = `Project-Description ${darkMode ? 'dark-mode' : ''}`;

    const renderProjectName = (project) => {
        //check if the project has a route 
        if (project.route) {
            return <Link to={project.route} style={{ textDecoration: 'none', color: 'inherit' }}>{project.name}</Link>
        }
        //check if project has an external link
        else if(project.url) {
            return <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
        }
        // If neither, just display the name
        return <span>{project.name}</span>;
    }
    return (
        <>
           <ul className="Projects-List">
                {projects.map(project => (
                    <li key={project.name}>
                        <div className="Project-Name">{renderProjectName(project)}</div>
                        <div className={projectdescriptionClass}>{project.description}</div>
                    </li>
                ))}
            </ul> 
        </>
    );
}
export default ProjectsList;
