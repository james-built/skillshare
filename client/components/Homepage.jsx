import React from 'react'

// Components
import Userbox from './Userbox'
import Signupbox from './Signupbox'

export default class Homepage extends React.Component {
  render () {
    return (
      <div>
        <img src="https://fillmurray.com/300/300"/>
        <div className="homepage info">
          <p className="homepage summary">
          Summary for the frontpage goes here, describes suff and things.
          </p>
          <Userbox />
        </div>
        <Signupbox />
      </div>
    )
  }
}
