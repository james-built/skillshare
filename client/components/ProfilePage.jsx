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
// Demo data
const demoUsers = [
  {id: 1, name: "Tim", skill: "Drone Pilot", profilePic: "https://pbs.twimg.com/media/CynmmdYWgAAjky1.jpg"},
  {id: 2, name: "Sarah", skill: "Circuitry Design", profilePic: "https://static3.depositphotos.com/1001951/142/i/950/depositphotos_1422665-stock-photo-cyber-woman-with-tomatos.jpg"},
  {id: 3, name: "Angela", skill: "CAD", profilePic: "https://thumb9.shutterstock.com/display_pic_with_logo/434191/434191,1276812066,15/stock-photo-young-attractive-dangerous-woman-aiming-at-gold-fish-55445089.jpg"},
  {id: 4, name: "Paul", skill: "Carpentry", profilePic: "https://st2.depositphotos.com/4296911/6391/i/950/depositphotos_63917813-stock-photo-portrait-of-a-young-sexy.jpg"},
]

export default class UserProfile extends React.Component {
  constructor (props) {
    super (props)
    //This state will be filled with the user data from API call
    const selectedUser = this.props.match.params.id
    demoUsers.map((selectedUser) => {})
    this.state = {}
  }
  render () {
    console.log(this.state)
    return (
      <div className="container">
        <div className="profile_header">
          <img style={profileImage} src="https://via.placeholder.com/200x200" alt="profile image"/>
          <h2 className="pageHeader">{this.state.name}</h2>
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
