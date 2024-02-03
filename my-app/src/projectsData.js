//logos
import githubIcon from './assets/logos/github-light.png'
import javaIcon from './assets/logos/java-icon.png'
import dockerIcon from './assets/logos/docker-icon.png'
import javafxIcon from './assets/logos/javafx-icon.png'
import gradleIcon from './assets/logos/gradle-icon.png'
import mongoIcon from './assets/logos/mongoDb-icon.png'
import githubIconDark from './assets/logos/github-dark.png'
import springBootIcon from './assets/logos/spring-logo.png'

import StarBattleXContent from './StarBattleX.md'


//project images
import starBattleXImage from './assets/StarBattleXImage.png';

const projects = [
    {
        name: "StarBattleX",
        description: "An Advanced Platform for Star Battle Challenges",
        route: "/StarBattleX",
        title: "StarBattleX",
        projectLinks: [
            {
                url: "https://github.com/levienk/StarBattleX",
                image: githubIconDark,
                imageDark: githubIcon,
                imageAlt: "Github Icon",
            },
        ],
        groupProject: true,
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
                name: 'Docker',
                logoUrl: dockerIcon,
                link: 'https://www.docker.com/'
            },
            {
                name: "mongoDB",
                logoUrl: mongoIcon,
                link: 'https://www.mongodb.com/'
            },
            {
                name: 'Gradle',
                logoUrl: gradleIcon,
                link: 'https://gradle.org/'
            },
            {
                name: 'Spring Boot',
                logoUrl: springBootIcon,
                link: 'https://spring.io/'
            }
        ],
        content: StarBattleXContent
    },
  ];
export default projects;