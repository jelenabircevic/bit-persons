import React from 'react'

const UserCardItem = (props) => {
  return (
      <div className="col s6 m4">
        <div className={`card ${props.obj.gender}`}>
          <div className="card-image">
            <img src={props.obj.image} alt="user_img" />
            <span className="card-title">{props.obj.name}</span>
          </div>
          <div className="card-content">
            <p>{props.obj.email}</p>
            <p>{`Birth date: ${props.obj.dob}`}</p>
          </div>
        </div>
      </div>
  )
}

export default UserCardItem