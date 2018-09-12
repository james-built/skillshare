import React from 'react'
import {Link} from 'react-router-dom'

export default function Signupbox () {
  return (
    <div className="row fixed-bottom">
      <div className="col-6"><Link to="/user/profile" ><button className="phone button">sign-in</button></Link></div>
      <div className="col-6"><Link to="/user/signup" ><button id="register" className="phone button">register</button></Link></div>
    </div>
  )
}