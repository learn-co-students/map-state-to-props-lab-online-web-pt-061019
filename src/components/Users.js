import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <h2>Number of Users: {this.props.userCount}</h2>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);