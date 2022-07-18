
import facebookLogo from "./assets/facebook.svg"
import instaLogo from "./assets/insta.svg"
import gitLogo from "./assets/github.svg"
import twitterLogo from "./assets/twitter.svg"

export default function Footer() {
  return (
    <footer className="my-footer">
      <img src={facebookLogo} alt="Facebook Logo" />
      <img src={instaLogo} alt="Instagram Logo" />
      <img src={gitLogo} alt="GitHub Logo" />
      <img src={twitterLogo} alt="Twitter Logo" />
    </footer>
  )
}