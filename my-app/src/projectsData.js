//logos
import githubIcon from './assets/logos/github3-icon.png'
import javaIcon from './assets/logos/java-icon.png'
import dockerIcon from './assets/logos/docker-icon.png'
import javafxIcon from './assets/logos/javafx-icon.png'
import gradleIcon from './assets/logos/gradle-icon.png'
import mongoIcon from './assets/logos/mongoDb-icon.png'


//project images
import starBattleXImage from './assets/StarBattleXImage.png';

const projects = [
    {
        name: "StarBattleX",
        description: "Lorem Ipsum is the best game ever made in the world",
        route: "/StarBattleX",
        title: "StarBattleX",
        projectLink: "https://github.com/levienk/StarBattleX",
        projectLinkImage: githubIcon,
        projectLinkImageAlt: "Github Icon",
        projectImage: starBattleXImage,
        projectImageAlt: "Menu and Main Game of StarBattleX",
        technologies: [
            {
            name: 'Java',
            logoUrl: javaIcon,
            link: 'https://www.java.com/en/'
            },
            {
                name: 'JavaFx',
                logoUrl: javafxIcon,
                link: 'https://openjfx.io/'
            },
            {
                name: 'docker',
                logoUrl: dockerIcon,
                link: 'https://www.docker.com/'
            },
            {
                name: "mongoDB",
                logoUrl: mongoIcon,
                link: 'https://www.mongodb.com/'
            },
            {
                name: 'gradle',
                logoUrl: gradleIcon,
                link: 'https://gradle.org/'
            }
        ],
        contentSections: [
            {
                subtitle: "The Development Journey of StarBattlex: Reflections and Insights",
                text: "Developing StarBattlex has been an enlightening journey, a blend of academic rigor and practical teamwork. This project, created as an project in my Computer Science Object-Oriented Programming course, was more than just a coding task; it was a simulation of a real-world team environment."
            },
            {
                subtitle: "Academic Foundations and Real-World Simulation:",
                text: "The course introduced us to various programming patterns and object-oriented design principles. StarBattlex was conceived to mirror a professional setting with four iterations of application development, each culminating in specific deliverables. This iterative approach not only tested our technical skills but also our ability to adapt and evolve with the project's demands."
            },
            {
                subtitle: "Early Stages: Planning and Designing:",
                text: "In the initial phases, we laid the groundwork with thorough documentation, including a domain model diagram, package diagram, user interface sketches, and user stories. These elements set a clear roadmap for our development process. We also created detailed class diagrams corresponding to each level of the package diagram, ensuring a structured and well-thought-out approach to our coding."
            },
            {
                subtitle: "Technical Skillset and Learning Curve:",
                text: "This project was a deep dive into a suite of technologies and tools, some familiar and others new to us. We utilized Gradle for build automation, explored Swagger for API documentation, and implemented a RESTful API. Our backend was powered by MongoDB, and we employed Docker for containerization. The frontend development was carried out using Java and JavaFX, providing a practical application of classroom theory."
            },
            {
                subtitle: "Embracing Effective Software Design:",
                text: "Our decision to separate code into different packages and classes turned out to be incredibly effective. This approach allowed for focused development and minimized conflicts, especially given our conflicting schedules. For instance, I concentrated on the Board class within the domain package, honing in on the game logic without the distraction of UI concerns. This separation not only facilitated easier debugging but also set a strong foundation for future expansions and improvements."
            },
            {
                subtitle: "Recognizing Areas for Improvement:",
                text: "A key area for improvement identified was the lack of comprehensive comments and documentation. Implementing detailed comments and documentation would greatly benefit future maintainers and team members. Additionally, our project could have benefited from more robust bug checks and a comprehensive system for input validation and error checking, to prevent and catch errors more effectively."
            },
            {
                subtitle: "Streamlining Team Processes:",
                text: "Our group process was generally effective, with strategies like early task allocation through TODO lists and maintaining a chat space for updates and questions. However, meetings often became lengthy and sidetracked. In the future, shorter, more focused meetings, potentially more frequent and spaced out, would enhance productivity and efficiency."
            }
        ]
    },
    {
        name: "KQWZ 106.5 LPFM",
        description: "website for ..",
        route: "/KQWZ-Website",
        title: "KQWZ 106.5 LPFM",
        projectLink: "https://github.com/levienk/StarBattleX",
        projectLinkImage: "../assets/logo/github-icon.svg",
        projectLinkImageAlt: "Github Icon",
        projectImage: "../assets/StarBattleXImage.png",
        projectImageAlt: "Menu and Main Game of StarBattleX",
        technologies: [
            {
            name: 'Java',
            logoUrl: '../assets/logos/java-icon.png',
            link: 'https://www.java.com/en/'
            }
        ],
        contentSections: [
            {
            subtitle: "The Development Journey of StarBattlex: Reflections and Insights",
            text: "Developing StarBattlex has been an enlightening journey, a blend of academic rigor and practical teamwork. This project, created as an assignment in my Computer Science Object-Oriented Programming course, was more than just a coding task; it was a simulation of a real-world team environment."
            }
        ]
    }
  ];
export default projects;