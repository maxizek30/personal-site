import LinkedInIcon from "../assets/linkedin-icon.svg"
import GithubIcon from "../assets/github-icon.svg"
import EmailIcon  from "../assets/email-icon.svg"
import "../styles/Contact.css"
function Contact() {
  return (
    <div className="SocialMedia-Icons">
      <a href="mailto:familiacachorin@gmail.com">
        <img src={EmailIcon} alt="Email Icon" />   
      </a>
      <a href="https://www.linkedin.com/in/max-lopez-2b3b17242">
        <img src={LinkedInIcon} alt="LinkedIn Icon" />
      </a>
      <a href="https://github.com/maxizek30">
        <img src={GithubIcon} alt="Github Icon" />
      </a>
    </div>
  )
}

export default Contact