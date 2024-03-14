//logos
import githubIcon from './assets/logos/github-light.png'
import javaIcon from './assets/logos/java-icon.png'
import dockerIcon from './assets/logos/docker-icon.png'
import javafxIcon from './assets/logos/javafx-icon.png'
import gradleIcon from './assets/logos/gradle-icon.png'
import mongoIcon from './assets/logos/mongoDb-icon.png'
import githubIconDark from './assets/logos/github-dark.png'
import springBootIcon from './assets/logos/spring-logo.png'
import globeIcon from './assets/logos/globe.svg'
import globeIconDark from './assets/logos/globeDark.svg'
import reactIcon from './assets/logos/react-icon.svg'
import muiLogo from './assets/logos/muiLogo.png'
import netlifyLogo from './assets/logos/netlify-logo-svg-vector.svg'

//project images
import starBattleXImage from './assets/project-images/StarBattleXImage.png';
import KQWZSiteImage from './assets/project-images/OneAmericaVoiceWebsite.png'

//MD content
import StarBattleXContent from './assets/documents/StarBattleX.md'
import KQWZRadioContent from './assets/documents/KqwzRadio.md'




const projects = [
    {
        name: "StarBattleX",
        description: "An Advanced Platform for Star Battle Challenges",
        route: "StarBattleX",
        title: "StarBattleX",
        projectLinks: [
            {
                link: "https://github.com/levienk/StarBattleX",
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
    {
        name: "kqwzradio.org",
        description: "Empowering South King County's voices through inclusive, community-driven radio.",
        route: "kqwzradio",
        title: "KQWZ Radio",
        projectLinks: [
            {
                link: "https://kqwzradio.org/",
                image: globeIconDark,
                imageDark: globeIcon,
                imageAlt: "Globe icon"
            },
            {
                link: "https://github.com/maxizek30/KQWZ-Site",
                image: githubIconDark,
                imageDark: githubIcon,
                imageAlt: "Github Icon",
            }
        ],
        groupProject: false,
        projectImage: KQWZSiteImage,
        projectImageAlt: "Website screenshot of kqwzradio.org",
        technologies: [
            {
                name: 'React',
                logoUrl: reactIcon,
                link: 'https://react.dev/'
            },
            {
                name: 'Material-UI',
                logoUrl: muiLogo,
                link: 'https://mui.com/'
            },
            {
                name: 'Netlify',
                logoUrl: netlifyLogo,
                link: 'https://www.netlify.com/'
            }
        ],
        content: KQWZRadioContent


    }
  ];
export default projects;