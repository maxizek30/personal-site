import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/ProjectsList.css"
import { useDarkMode } from "../context/DarkModeContext";

const ProjectsList = ({ projects }) => {
    const { darkMode } = useDarkMode(); 
    const projectDescriptionClass = `Project-Description ${darkMode ? 'dark-mode' : ''}`;
    const groupProjectTitleClass = `groupProjectTitle ${darkMode ? 'dark-mode' : ''}`;

    
    //individual projects
    const individualProjects = projects.filter(project => !project.groupProject);
    //group projects
    const groupProjects = projects.filter(project => project.groupProject);

    const renderProjects = (ProjectsList) => (
        <ul className='Projects-List'>
            {ProjectsList.map((project, index) => (
                <li key={index}>
                    <div className='Project-Name'>
                        {project.route ?(
                            <Link
                                to={project.route}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {project.name}
                                <div className={projectDescriptionClass}>{project.description}</div>
                            </Link>
                            ) : project.url ? (
                                <a href={project.url}w target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                    <div className={projectDescriptionClass}>{project.description}</div>
                                </a>
                            ) : (
                                <>
                                    <span>{project.name}</span>
                                    <div className={projectDescriptionClass}>{project.description}</div>
                                </>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <div className="projectsListContainer">
                {renderProjects(individualProjects)}

                {groupProjects.length > 0 && (
                    <>
                       <div className={groupProjectTitleClass}>Group Projects</div>
                        {renderProjects(groupProjects)}
                    </>
                )}
            </div>
        </>
    );
}
export default ProjectsList;
