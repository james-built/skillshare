import React from 'react'

// Components
import Nav from './Nav'

// Styles
const profileImage = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%'
}

export default class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <div className="profile header">
          <img style={profileImage} src="https://via.placeholder.com/200x200" alt="profile image"/>
          <h2 className="pageHeader">Profile Name</h2>
        </div>
        <div className="profile body">
          <p>
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
        <Nav />
      </div>
    )
  }
}
