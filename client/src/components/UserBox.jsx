import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchUsers} from '../actions/users'

// Components
import UserCard from './UserCard'

class UserBox extends React.Component {
  constructor (props) {
    super(props)
    // This state will be filled with a selection of random users from database
    this.state = {
      demoUsers: [
        {id: 1001,
          name: 'Tim',
          skill: 'Drone Pilot',
          profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 1002,
          name: 'Sarah',
          skill: 'Circuitry Design',
          profilePic: 'https://images.pexels.com/photos/157741/woman-confident-happy-confident-woman-157741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 1003,
          name: 'Angela',
          skill: 'CAD',
          profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 1004,
          name: 'Paul',
          skill: 'Carpentry',
          profilePic: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
      ]
    }
  }
  // Add a function to get random selection of users

  componentDidMount () {
    fetchUsers()
  }

  render () {
    return (
      <div className="col-6">
        <div className="pre-scrollable">
          {this.state.demoUsers.map((user) => {
            return (<Link to={`/user/profile/${user.id}`} key={user.id}>
              <UserCard name={user.name} skill={user.skill} profilePic={user.profilePic} />
            </Link>)
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    ready: state.users.ready
  }
}

export default connect(mapStateToProps)(UserBox)
