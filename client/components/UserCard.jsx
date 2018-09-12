import React from 'react'

const UserCard = (props) => {
  return (
    <div className="card">
      <img className="card-img"/>
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.skill}</p>
      </div>
    </div>
  )
}

export default UserCard