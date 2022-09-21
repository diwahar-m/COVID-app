import './index.css'

const States = props => {
  const {detail} = props
  const {name, confirmed, active, recovered, deceased, population} = detail

  return (
    <li>
      <div className="states-row">
        <p className="state-para">{name}</p>
        <p className="confirmed">{confirmed}</p>
        <p className="active">{active}</p>
        <p className="recovered">{recovered}</p>
        <p className="deceased">{deceased}</p>
        <p className="population">{population}</p>
      </div>
    </li>
  )
}

export default States
