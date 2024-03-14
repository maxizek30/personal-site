import { useEffect, useState } from 'react';
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Showcase.css';
import ReactMarkdown from 'react-markdown';


function Showcase({project}) {
    const { darkMode } = useDarkMode();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(project.content)
          .then((res) => res.text())
          .then((text) => setContent(text));
      }, []);


    const showcaseSectionClass = `Showcase-Section ${darkMode ? 'dark-mode' : ''}`;

    if (!project) {
        return <div>Loading...</div>; // Or any other fallback UI
    }
    

    return (
    <>
        <div className={showcaseSectionClass}>
            <div className="projectContainer">
                {/*Title Section*/}
                <div className="titleSection">
                    <Link
                        to="/portfolio"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                    }}
                    >
                        <button className="backButton">{"<"}Back</button>
                    </Link>
                    <div className="projectTitle">{project.title}</div>
                    <div className="spacer"/>
                </div>
                {/*Hero Image*/}
                <img src={project.projectImage} alt={project.projectImageAlt} className="projectImage"/>
                {/*Tech Used and Links Section*/}
                <div className="projectLogos">
                    <div className="techLogos">
                        {project.technologies.map((tech, index) => (
                            <a key={index} href={tech.link} target="_blank" rel="noopener noreferrer">
                                <img src={tech.logoUrl} alt={`${tech.name} Logo`} />
                            </a>
                        ))}
                    </div>
                    <div className="linkLogos">
                        {project.projectLinks.map((link, index) => (
                            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                                <img  src={darkMode && link.imageDark ? link.imageDark : link.image} alt={link.imageAlt} />
                            </a>
                        ))}
                    </div>
                </div>
                {/*content*/}
                <ReactMarkdown children={content} />
            </div>
        </div>
    </>
  );
}

export default Showcase