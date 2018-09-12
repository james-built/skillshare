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
      <div className="container">
        <div className="profile_header">
          <img style={profileImage} src="https://via.placeholder.com/200x200" alt="profile image"/>
          <h2 className="pageHeader">James Dev</h2>
        </div>
        <div className="pre-scrollable" style={{height: "85%"}}>
          <p>Some skills that they have:</p>

          <ul>
            <li>PCB design</li>
            <li>Welding</li>
            <li>UX design</li>
            <li>Engineering</li>
          </ul>
          <p>A picture of a project they worked on:</p>
          <img style={{height: 150, width: "auto"}} src="http://cuelloconstruction.com/wp-content/uploads/2011/12/custom-carpentry.jpg" alt="uploaded picture"/>
          <p>A list of some of their equipment:</p>
          <ul>
            <li>Wire</li>
            <li>Fibreglass</li>
            <li>3D Printer</li>
            <li>Heat Gun</li>
            <li>Drone</li>
          </ul>
        </div>
        <Nav />
      </div>
    )
  }
}