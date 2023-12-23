import "../styles/Portfolio.css"
import ProjectsList from "../components/ProjectsList";

const projects = [
  {
    name: "StarBattleX",
    description: "Lorem Ipsum is the best game ever made in the world"
  }
];
function Portfolio() {
  return (
    <>
    <div className="projects-list">
      <ProjectsList projects={projects}/>
    </div>
    </>
  )
}

export default Portfolio