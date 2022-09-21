import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <ul className="not-found-card">
      <li>
        <img
          src="https://res.cloudinary.com/dx1hxk1dn/image/upload/v1661876525/Group_7485_fegbt9.png"
          alt="not-found-pic"
          className="not-found-image"
        />
      </li>
      <li>
        <h1 className="not-found-head">Page Not Found</h1>
      </li>
      <li>
        <p className="not-found-para">
          we are sorry, the page you requested could not be found <br />
          Please go back to the home page
        </p>
      </li>
      <li>
        <Link to="/">
          <button type="button" className="not-found-button">
            Home
          </button>
        </Link>
      </li>
    </ul>
  </div>
)

export default NotFound
