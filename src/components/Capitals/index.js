import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  getCapitalAndCountry = () => {
    const {activeCapitalId} = this.state
    const capitalAndCountry = countryAndCapitalsList.filter(
      eachItem => eachItem.id === activeCapitalId,
    )
    return capitalAndCountry[0]
  }

  updateActiveCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const capitalAndCountry = this.getCapitalAndCountry()
    const {country} = capitalAndCountry

    return (
      <div className="capitals-bg-container">
        <div className="capitals-card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            id="capitals"
            onChange={this.updateActiveCapital}
            value={activeCapitalId}
            className="select"
          >
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id} className="option">
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals" className="label">
            Is capital of which country?
          </label>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
