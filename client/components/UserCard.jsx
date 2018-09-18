import React from 'react'

const UserCard = (props) => {
  return (
    <div className="card" style={{backgroundColor: 'rgba(100, 147, 153, 0.877)'}}>
      <img className="card-img" src={props.profilePic}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.skill}</p>
      </div>
    </div>
  )
}

export default UserCard
