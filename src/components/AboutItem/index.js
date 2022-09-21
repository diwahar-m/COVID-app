import './index.css'

const AboutItem = props => {
  const {question, answer} = props

  return (
    <li>
      <div className="about-list">
        <p className="about-question">{question}</p>
        <p className="about-answer">{answer}</p>
      </div>
    </li>
  )
}

export default AboutItem
