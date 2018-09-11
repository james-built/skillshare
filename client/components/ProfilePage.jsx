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
          <p>Some skills that they have:</p>

          <ul>
            <li>PCB design</li>
            <li>Welding</li>
            <li>UX design</li>
            <li>Engineering</li>
          </ul>
          <p>A picture of a project they worked on:</p>
          <img src="http://cuelloconstruction.com/wp-content/uploads/2011/12/custom-carpentry.jpg" alt="uploaded picture"/>
          <p>A list of some of their equipment:</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Nav className="nav"/>
      </div>
    )
  }
}
