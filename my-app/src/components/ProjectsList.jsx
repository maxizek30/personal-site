import "../styles/ProjectsList.css"

const ProjectsList = ({ projects }) => {
    return (
        <>
           <ul className="Projects-List">
                {projects.map(project => (
                    <li key={project.name}>
                        <div className="Project-Name">{project.name}</div>
                        <div className="Project-Description">{project.description}</div>
                    </li>
                ))}
            </ul> 
        </>
    );
}
export default ProjectsList;
