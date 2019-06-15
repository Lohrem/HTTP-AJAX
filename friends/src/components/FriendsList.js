import React from 'react'
import axios from 'axios'

export default class FriendsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then((result) => {
        this.setState(() => ({ friends: result.data }))
      }).catch((err) => {
        console.log(err);
      })
  }
  deleteFriend = (e, id) => {
    e.preventDefault()
    // id = this.state.friends.id
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => console.log('friend deleted: ', id))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="friendsList">
        {this.state.friends.map(friend => {
          return (
            <div className="friendCard" key={friend.id}>
              <h3 className="friendName">Name: {friend.name}</h3>
              <h4 className="friendAge">Age: {friend.age}</h4>
              <h4 className="friendEmail">Email: {friend.email}</h4>
              <button onClick={e => this.deleteFriend(e, friend.id)}>Delete Friend</button>
            </div>
          )
        })}
      </div>
    )
  }
}