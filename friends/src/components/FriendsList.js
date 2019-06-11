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

  render() {
    return (
      <div className="friendsList">
        {this.state.friends.map(friend => {
          return (
            <div className="friendCard" key={friend.id}>
              <h3 className="friendName">{friend.name}</h3>
              <h4 className="friendAge">{friend.age}</h4>
              <h4 className="friendEmail">{friend.email}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}