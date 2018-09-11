import React from 'react'
import {Link} from 'react-router-dom'

// Styles
const buttons = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end'
}

export default function Signupbox () {
  return (
    <div style={buttons}>
      <Link to='/user/profile'><button id="sign-in">sign-in</button></Link>
      <button id="register">register</button>
    </div>
  )
}
