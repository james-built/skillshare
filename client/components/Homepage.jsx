import React from 'react'

// Components
import UserBox from './UserBox'
import Signupbox from './Signupbox'

// Styles
const homepagePicture = {
  height: 460,
  width: '100%',
  fontFamily: 'Black Ops One, cursive',
  fontSize: '2rem',
  color: 'white',
  display: 'flex',
  alignItems: 'center'
}
const homepageTitle = {
  fontWeight: '9',
  fontSize: '2em',
  color: '#8A717B',
  textAlign: 'center',
  webkitTextStroke: '2px #B19E83'
}
export default class Homepage extends React.Component {
  render () {
    return (
      <div>
        <div className="img-fluid homepageImage" style={homepagePicture}><p style={homepageTitle}>Skill Share</p></div>
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
