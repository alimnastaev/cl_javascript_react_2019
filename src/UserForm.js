import React from 'react'

// Input Form to explore number of repos for a perticular user 
const UserForm = props => {
  return (
    <form onSubmit={props.getUser}>
      <input
        style={{ margin: '30px auto', display: 'block' }}
        type="text"
        name="username"
      />
      <button className="btn btn-dark btn-sm">Submit</button>
    </form>
  )
}

export default UserForm
