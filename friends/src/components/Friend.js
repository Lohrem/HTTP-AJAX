import React from 'react'
import axios from 'axios'

class Friend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    const friendId = this.props.match.params.id
    this.fetchFriend(friendId)
  }
  fetchFriend = friendId => {
    axios
      .get(`http://localhost:5000/api/friends/${friendId}`)
      .then(res => this.setState(() => ({ friend: res.data })))
      .catch(err => console.error(err))
  }
  render() {
    const { name, age, email } = this.state.friends
    return (
      <div className="friendCard">
        <h3 className="friendName">{name}</h3>
        <h4 className="friendAge">{age}</h4>
        <h4 className="friendEmail">{email}</h4>
      </div>
    )
  }
}
export default Friend