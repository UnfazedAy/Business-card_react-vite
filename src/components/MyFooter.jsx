import twitterLogo from '../assets/Twitter Icon.png'
import facebookLogo from '../assets/Facebook Icon.png'
import instagramLogo from '../assets/Instagram Icon.png'
import githubLogo from '../assets/GitHub Icon.png'

export default function MyFooter () {
  return (
    <footer className="footer-section">
      <div className="twitter-icon">
        <img src={twitterLogo} alt="twitter logo" />
      </div>

      <div className="facebook-icon">
        <img src={facebookLogo} alt="twitter logo" />
      </div>

      <div className="instagram-icon">
        <img src={instagramLogo} alt="twitter logo" />
      </div>

      <div className="github-icon">
        <img src={githubLogo} alt="twitter logo" />
      </div>
    </footer>
  )
}