import React from 'react'

// Components
import UserBox from './UserBox'
import Signupbox from './Signupbox'

// Styles
const homepagePicture = {
  height: 460,
  width: '100%'
}

export default class Homepage extends React.Component {
  render () {
    return (
      <div>
        <p className="img-fluid homepageImage" style={homepagePicture}>Skill Share</p>
        <div className="container">
          <div className="row">
            <p className="col-6">
            Where ideas meet execution.<br/><br/>
            Find the complement to your skillset to help bring
            your vision to reality.<br/><br/>
            Apply your skills to real world
            projects to grow & develop.
            </p>
            <UserBox />
          </div>
          <Signupbox />
        </div>
      </div>
    )
  }
}
