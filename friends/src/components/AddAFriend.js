import React from 'react'
import './addAFriend.css'

const FriendForm = (props) => {
  const activeClass = props.show ? "modal display-block" : "modal display-none"
  return(
    <form
      className={activeClass}
      onSubmit={props.newFriend}
      >
      <label htmlFor="name">Friend name: </label>
      <input onChange={props.inputChange} type="text" name="name" value={props.name} required />
      <label htmlFor="age">Friend age: </label>
      <input onChange={props.inputChange} type="number" name="age" value={props.age} required />
      <label htmlFor="email">Friend email: </label>
      <input onChange={props.inputChange} type="email" name="email" value={props.email} required />
      <br></br>
      <button onClick={props.newFriend}>Submit</button>
      <button onClick={props.hideModal}>Close</button>
    </form>
  )
}

export default FriendForm