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
        <img style={homepagePicture} src="https://via.placeholder.com/375x460"/>
        <div style={{display: 'flex'}}>
          <p style={{flexGrow: 2}}>
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
