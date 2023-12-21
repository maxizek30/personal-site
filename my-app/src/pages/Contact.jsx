import LinkedInIcon from "../assets/linkedin-icon.svg"
import GithubIcon from "../assets/github-icon.svg"
import EmailIcon  from "../assets/email-icon.svg"
import "../styles/Contact.css"
function Contact() {
  return (
    <div className="SocialMedia-Icons">
      <img src={EmailIcon} alt="LinkedIn Icon" />   
      <img src={LinkedInIcon} alt="LinkedIn Icon" />
      <img src={GithubIcon} alt="LinkedIn Icon" />

   
    </div>
  )
}

export default Contact