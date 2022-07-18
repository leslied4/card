import mail from "./assets/Mail.svg"
import linkedin from "./assets/linkedin.svg"
import rectangle from "./assets/rectangle.png"


export default function Info() {
  return (
    <div className="info">
      <img src={rectangle} alt="Profile Photo" className="photo"/>
      <div className="name">Leslie Daafuor</div>
      <div className="occupation">Web Developer</div>
      <div className="website">google.com</div>
      <div className="info-buttons">
        <div className="mail">
          <img src={mail} alt="Mail Icon" />
          Email
        </div>
        <div className="linkedin">
          <img src={linkedin} alt="Linkedin Icon" />
          Linkedin
        </div>
      </div>
    </div>
  )
}