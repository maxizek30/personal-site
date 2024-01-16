import { useLocation, Outlet } from 'react-router-dom';
import ProjectsList from "../components/ProjectsList";
import "../styles/Portfolio.css";

function Portfolio({ projects }) {
  const location = useLocation();

  // Check if the path is exactly '/portfolio'
  const isPortfolioHome = location.pathname === '/portfolio';

  return (
    <>
      <div className="projects-container">
        {isPortfolioHome ? (
          <ProjectsList projects={projects} />
        ) : (
          <Outlet /> // This will render the Showcase component
        )}
      </div>
    </>
  );
}

export default Portfolio;
