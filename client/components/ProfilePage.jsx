import React from 'react'

// Components
import Nav from './Nav'

// Styles
const profileImage = {
  backgroundImage: "url('https://via.placeholder.com/200x200')",
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%',
  borderRadius: '50%'
}

export default class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <div className="profile header">
          <img style={profileImage} src="https://via.placeholder.com/200x200" alt="profile image"/>
          <h2 className="pageHeader">Profile Name</h2>
        </div>
        <div className="textBox">
          <p className="textScroll">
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
            body text for the profile here multiple lines of text
          </p>
        </div>
        <Nav className="nav"/>
      </div>
    )
  }
}
