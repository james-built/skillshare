import React from 'react'

// Components
import UserCard from './UserCard'

export default class UserBox extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      demoUsers: [
        {name: "Tim", skill: "Drone Pilot", profilePic: ""},
        {name: "Sarah", skill: "Circuitry Design", profilePic: ""}
      ],

    }
  }
  render () {
    return (
      <div className="col-6">
      {this.state.demoUsers.map((user) => {
        return <UserCard name={user.name} skill={user.skill} profilePic={user.profilePic} />
      })}
      </div>
    )
  }
}

// export default function Userbox () {
//   return (
//     <div className="col-6">
//     {this.state.demoUsers.map((user) => {
//       <UserCard name={user.name} skill={user.skill} profilePic={user.profilePic} />
//     })}
//     </div>
//   )
// }
