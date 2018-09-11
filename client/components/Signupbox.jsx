import React from 'react'
import {Link} from 'react-router-dom'

export default function Signupbox () {
  return (
    <div className="row">
      <Link to='/user/profile' className="col-sm"><button id="sign-in" >sign-in</button></Link>
      <button id="register" className="col-sm">register</button>
    </div>
  )
}
