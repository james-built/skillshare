import React from 'react'
import {Link} from 'react-router-dom'

export default function Signupbox () {
  return (
    <div className="fixed-bottom nav">
      <div className="col-6"><Link to="/user/home"><button className="colorButton">sign-in</button></Link></div>
      <div className="col-6"><Link to="/user/register" ><button id="register" className="colorButton">register</button></Link></div>
    </div>
  )
}
