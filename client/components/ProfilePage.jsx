import React from 'react'

import Nav from './Nav'

export default class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <div className="profile header">
          <img alt="profile image"/>
          <h2>Profile Name</h2>
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
          </p>
        </div>
        <Nav />
      </div>
    )
  }
}
