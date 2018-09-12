import React from 'react'

export default class UserSignup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      phoneNumber: ''
    }
  }
  render () {
    return (
      <div>
        <label for="name">Name: </label>
        <input id="name" />
        <input className="username" >Username: </input>
        <input className="email" >Email: </input>
        <input className="phoneNumber" >Phone Number: </input>
      </div>
    )
  }
}
