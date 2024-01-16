import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/ProjectsList.css"
import { useDarkMode } from "../context/DarkModeContext";

const ProjectsList = ({ projects }) => {
    const { darkMode } = useDarkMode(); 
    const projectDescriptionClass = `Project-Description ${darkMode ? 'dark-mode' : ''}`;

    return (
        <>
           <ul className="Projects-List">
                {projects.map((project, index) => (
                    <li key={index}> {/* Use index for key to ensure uniqueness */}
                        <div className="Project-Name">
                            {project.route ? (
                                <Link 
                                    to={project.name}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {project.name}
                                </Link>
                            ) : project.url ? (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
                            ) : (
                                <span>{project.name}</span>
                            )}
                        </div>
                        <div className={projectDescriptionClass}>{project.description}</div>
                    </li>
                ))}
            </ul> 
        </>
    );
}
export default ProjectsList;
