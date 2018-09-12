import React from 'react'
import {Link} from 'react-router-dom'

// Components
import UserCard from './UserCard'

export default class UserBox extends React.Component {
  constructor (props) {
    super (props)
    //This state will be filled with a selection of random users from database
    this.state = {
      demoUsers: [
        {id: 1, name: "Tim", skill: "Drone Pilot", profilePic: "https://pbs.twimg.com/media/CynmmdYWgAAjky1.jpg"},
        {id: 2, name: "Sarah", skill: "Circuitry Design", profilePic: "https://static3.depositphotos.com/1001951/142/i/950/depositphotos_1422665-stock-photo-cyber-woman-with-tomatos.jpg"},
        {id: 3, name: "Angela", skill: "CAD", profilePic: "https://thumb9.shutterstock.com/display_pic_with_logo/434191/434191,1276812066,15/stock-photo-young-attractive-dangerous-woman-aiming-at-gold-fish-55445089.jpg"},
        {id: 4, name: "Paul", skill: "Carpentry", profilePic: "https://st2.depositphotos.com/4296911/6391/i/950/depositphotos_63917813-stock-photo-portrait-of-a-young-sexy.jpg"},
      ],

    }
  }
  // Add a function to get random selection of users

  render () {
    return (
      <div className="col-6">
        <div className="pre-scrollable">
          {this.state.demoUsers.map((user) => {
            return (<Link to={`/user/profile/${user.id}`}>
            <UserCard key={user.id} name={user.name} skill={user.skill} profilePic={user.profilePic} />
            </Link>)
          })}
        </div>
      </div>
    )
  }
}
