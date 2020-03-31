import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) =>
      <li key={index}>
        {user.username},
        {user.hometown}
      </li>
    )

    return (
      <div>
        <ul>
          { users }
          { users.length }
          {/* Users! */}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=> {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}
// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);
