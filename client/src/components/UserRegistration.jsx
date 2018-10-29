import React from 'react'

// Components
import Nav from './Nav'

// Styles
const signupPicture = {
  height: 460,
  width: '100%'
}

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

  handleSubmit () {

  }

  render () {
    return (
      <div>
        <img style={signupPicture} src="https://via.placeholder.com/375x460" />
        <div className="form container">
          <div className="row justify-content-around">
            <label className="col-2">Name:</label>
            <input className="col-6"/>
          </div>
          <div className="row justify-content-around">
            <label className="col-2">Username:</label>
            <input className="col-6"/>
          </div>
          <div className="row justify-content-around">
            <label className="col-2">Email:</label>
            <input className="col-6"/>
          </div>
          <div className="row justify-content-around">
            <label className="col-2">Phone Number:</label>
            <input className="col-6"/>
          </div>
        </div>
        <Nav className="nav" />
      </div>
    )
  }
}
