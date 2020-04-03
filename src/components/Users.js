import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <p>Total Users: {this.props.users.length}</p>

          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // return { state: ['a', 'b', 'c'] };
  return { users: state.users }
}

// Connect keeps a proper separation of concerns. App could be repurposed to do anything else without
export default connect(mapStateToProps)(Users);

// connect this component to Redux
// export default Users
