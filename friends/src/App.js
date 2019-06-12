import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import FriendsList from './components/FriendsList'
import FriendForm from './components/AddAFriend'
import axios from 'axios'

class App extends React.Component {
  state = {
    modalIsShowing: false,
    friends: [],
    name: '',
    age: 0,
    email: '',
    id: 0
  }
  showModal = e => {
    e.preventDefault()
    this.setState({ modalIsShowing: true })
    console.log("modal should show");
  }
  hideModal = e => {
    e.preventDefault()
    this.setState({ modalIsShowing: false })
    console.log("modal should close");
  }
  newFriend = e => {
    e.preventDefault()
    let newFriendData = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: new Date()
    }
    if(newFriendData.name !== '' && newFriendData.age !== 0 && newFriendData.email !== '') {
      axios
        .post(`http://localhost:5000/friends`, newFriendData)
        .then(res => {this.setState(() => ({ friends: res.data }))})
        .catch(err => console.log(err))
      this.setState({
        name: '',
        age: 0,
        email: '',
        id: 0
      })
    }
    else {
      alert('All fields must be filled')
      return
    }
  }
  inputChange = e => {
    e.preventDefault()
    // console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
        <div className="App">
          <button type="button" onClick={this.showModal}>Add a friend</button>
          <FriendForm
            show={this.state.modalIsShowing} hideModal={this.hideModal}
            newFriend={this.newFriend} inputChange={this.inputChange}
            name={this.state.name} age={this.state.age}
            email={this.state.email} id={this.state.id}
          ></FriendForm>
          <Route exact path="/" component={FriendsList} />
        </div>
      )
  }
}

export default App;
