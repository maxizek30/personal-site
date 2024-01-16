//logos
import githubIcon from './assets/logos/github-icon.svg'
import javaIcon from './assets/logos/java-icon.png'

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
            }
        ],
        contentSections: [
            {
            subtitle: "The Development Journey of StarBattlex: Reflections and Insights",
            text: "Developing StarBattlex has been an enlightening journey, a blend of academic rigor and practical teamwork. This project, created as an assignment in my Computer Science Object-Oriented Programming course, was more than just a coding task; it was a simulation of a real-world team environment."
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