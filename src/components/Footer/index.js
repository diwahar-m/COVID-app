import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {VscGithubAlt} from 'react-icons/vsc'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <img
      src="https://res.cloudinary.com/dx1hxk1dn/image/upload/v1661879620/COVID19INDIA_flfj3d.png"
      alt="logo"
      className="footer-logo"
    />
    <p className="footer-para">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-icons">
      <div className="git">
        <VscGithubAlt color="#CBD5E1" size="30" />
      </div>
      <div className="instagram">
        <FiInstagram color="#CBD5E1" size="30" />
      </div>
      <div>
        <FaTwitter color="#CBD5E1" size="30" />
      </div>
    </div>
  </div>
)

export default Footer
