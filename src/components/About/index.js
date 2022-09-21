import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import AboutItem from '../AboutItem'
import Footer from '../Footer'
import './index.css'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loader: 'LOADER',
}

class About extends Component {
  state = {aboutList: [], apiConstants: apiConstant.initial}

  componentDidMount() {
    this.getAbout()
  }

  getAbout = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    this.setState({apiConstants: apiConstant.loader})
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.setState({aboutList: data.faq, apiConstants: apiConstant.success})
  }

  renderingLoader = () => (
    <div className="loader-container" testid="aboutRouteLoader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderingSuccess = () => {
    const {aboutList} = this.state

    return (
      <ul className="about-unordered" testid="faqsUnorderedList">
        {aboutList.map(each => (
          <AboutItem
            answer={each.answer}
            question={each.question}
            key={each.qno}
          />
        ))}
      </ul>
    )
  }

  renderingFinal = apiConstants => {
    switch (apiConstants) {
      case apiConstant.success:
        return this.renderingSuccess()
      case apiConstant.loader:
        return this.renderingLoader()
      default:
        return null
    }
  }

  render() {
    const {apiConstants} = this.state

    return (
      <div className="about-container">
        <Header />
        <div className="about-inner-container">
          <h1 className="about-head1">About</h1>
          <h4 className="about-head2">Last updated on March 28th 2021.</h4>
          <h2 className="about-head3">
            COVID-19 vaccines be ready for distribution
          </h2>
          {this.renderingFinal(apiConstants)}
        </div>
        <div className="about-footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default About
