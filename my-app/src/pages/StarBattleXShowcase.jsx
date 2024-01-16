import GithubIcon from "../assets/logos/github-icon.svg"
import { useDarkMode } from "../context/DarkModeContext"
import '../styles/Showcase.css'

function StarBattleXShowcase() {
  const { darkMode } = useDarkMode();

  const showcaseSectionClass = `Showcase-Section ${darkMode ? 'dark-mode' : ''}`;

  return (
  <div className={showcaseSectionClass}>
    <div className="titleGithubSection">
      <h1>The Development Journey of StarBattlex: Reflections and Insights</h1>
      <a href="https://github.com/levienk/StarBattleX">
        <img src={GithubIcon} alt="Github Icon" />
      </a>
    </div>
    <p>
    Developing StarBattlex has been an enlightening journey, a blend of academic rigor and practical teamwork. This project, created as an assignment in my Computer Science Object-Oriented Programming course, was more than just a coding task; it was a simulation of a real-world team environment.
    </p>
    <h2>Academic Foundations and Real-World Simulation:</h2>  
    <p>The course introduced us to various programming patterns and object-oriented design principles. StarBattlex was conceived to mirror a professional setting with four iterations of application development, each culminating in specific deliverables. This iterative approach not only tested our technical skills but also our ability to adapt and evolve with the project's demands.</p>
    <h2>Early Stages: Planning and Designing:</h2>
    <p>In the initial phases, we laid the groundwork with thorough documentation, including a domain model diagram, package diagram, user interface sketches, and user stories. These elements set a clear roadmap for our development process. We also created detailed class diagrams corresponding to each level of the package diagram, ensuring a structured and well-thought-out approach to our coding.</p>
    <h2>Technical Skillset and Learning Curve:</h2>
    <p>This project was a deep dive into a suite of technologies and tools, some familiar and others new to us. We utilized Gradle for build automation, explored Swagger for API documentation, and implemented a RESTful API. Our backend was powered by MongoDB, and we employed Docker for containerization. The frontend development was carried out using Java and JavaFX, providing a practical application of classroom theory.</p>
    <h2>Embracing Effective Software Design:</h2>
    <p>Our decision to separate code into different packages and classes turned out to be incredibly effective. This approach allowed for focused development and minimized conflicts, especially given our conflicting schedules. For instance, I concentrated on the Board class within the domain package, honing in on the game logic without the distraction of UI concerns. This separation not only facilitated easier debugging but also set a strong foundation for future expansions and improvements.</p>
    <h2>Recognizing Areas for Improvement:</h2>
    <p>A key area for improvement identified was the lack of comprehensive comments and documentation. Implementing detailed comments and documentation would greatly benefit future maintainers and team members. Additionally, our project could have benefited from more robust bug checks and a comprehensive system for input validation and error checking, to prevent and catch errors more effectively.</p>
    <h2>Streamlining Team Processes:</h2>
    <p>Our group process was generally effective, with strategies like early task allocation through TODO lists and maintaining a chat space for updates and questions. However, meetings often became lengthy and sidetracked. In the future, shorter, more focused meetings, potentially more frequent and spaced out, would enhance productivity and efficiency.</p>
  </div>

  )
}

export default StarBattleXShowcase