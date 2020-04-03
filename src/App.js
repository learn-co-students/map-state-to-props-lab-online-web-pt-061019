import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // return { state: ['a', 'b', 'c'] };
  return { users: state.users }
}

// Connect keeps a proper separation of concerns. App could be repurposed to do anything else without
export default connect(mapStateToProps)(App);
