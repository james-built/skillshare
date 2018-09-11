import React from 'react'

// Components
import Userbox from './Userbox'
import Signupbox from './Signupbox'

// Styles
const homepagePicture = {
  height: 460,
  width: '100%'
}

export default class Homepage extends React.Component {
  render () {
    return (
      <div className="container">
        <img className="row" style={homepagePicture} src="https://via.placeholder.com/375x460"/>
        <div className="row">
          <p className="col-sm">
          Where ideas meet execution.<br/><br/>
          Find the complement to your skillset to help bring
          your vision to reality.<br/><br/>
          Apply your skills to real world
          projects to grow & develop.
          </p>
          <Userbox style={{flexGrow: 1}}/>
        </div>
        <Signupbox />
      </div>
    )
  }
}
