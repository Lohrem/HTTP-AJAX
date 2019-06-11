import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import FriendsList from './components/FriendsList'
// import Friend from './components/Friend'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FriendsList} />
      {/* <Route path={`/friends/:id`} render={props => (<Friend friend={Friend} {...props}/>)}/> */}
    </div>
  );
}

export default App;
