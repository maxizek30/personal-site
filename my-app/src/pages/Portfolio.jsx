import "../styles/Portfolio.css"
import ProjectsList from "../components/ProjectsList";

const projects = [
  {
    name: "StarBattleX",
    description: "Lorem Ipsum is the best game ever made in the world"
  },
  {
    name: "VTRU website",
    description: "Lorem ipsum this is the best website ever created"
  },
  {
    name: "VTRU website",
    description: "Lorem ipsum this is the best website ever created"
  },
  {
    name: "VTRU website",
    description: "Lorem ipsum this is the best website ever created"
  },
  {
    name: "VTRU website",
    description: "Lorem ipsum this is the best website ever created"
  },
  {
    name: "VTRU website",
    description: "Lorem ipsum this is the best website ever created"
  }
];
function Portfolio() {
  return (
    <>
    <div className="projects-container">
      <ProjectsList projects={projects}/>
    </div>
    </>
  )
}

export default Portfolio