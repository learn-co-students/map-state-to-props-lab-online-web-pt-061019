import React, { Component } from "react";
import { connect } from "react-redux";

// add any needed imports here
class Users extends Component {
  render() {
    const users = [];
    for (const user of this.props.users) {
      users.push(<li>{user.username}</li>);
    }
    return (
      <div>
        <ul>
          Users!
          {users}
          {users.length}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => ({
  users: state.users
});

// connect this component to Redux
export default connect(mapStateToProps)(Users);
