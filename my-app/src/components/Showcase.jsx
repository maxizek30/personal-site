import { useDarkMode } from "../context/DarkModeContext";
import '../styles/Showcase.css';


function Showcase({project}) {
    const { darkMode } = useDarkMode();


    const showcaseSectionClass = `Showcase-Section ${darkMode ? 'dark-mode' : ''}`;
    const mainImageSectionClass = `mainImageSection ${darkMode ? 'dark-mode' : ''}`;

    const projectLinkImageSrc = darkMode && project.projectLinkImageDark
                                ? project.projectLinkImageDark
                                : project.projectLinkImage;


    if (!project) {
        return <div>Loading...</div>; // Or any other fallback UI
    }

    return (
    <>
        <div className={showcaseSectionClass}>
            <div className="titleGithubSection">
               {project.title}
                <a href={project.projectLink}>
                    <img src={projectLinkImageSrc} alt={project.projectLinkImageAlt} />
                </a>
            </div>
            <div className="imageTechSection">
                <div className={mainImageSectionClass}>
                    <img src={project.projectImage} alt={project.projectImageAlt} />
                </div>
                <div className="techUsedSection">
                    <div className="techLogos">
                        {project.technologies.map((tech, index) => (
                            <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                                <img src={tech.logoUrl} alt={`${tech.name} Logo`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>  
            {project.contentSections.map((section, index) => (
                <div key={index}>
                    <h2>{section.subtitle}</h2>
                    <p>{section.text}</p>
                </div>
            ))}
        </div>
    </>
  );
}

export default Showcase