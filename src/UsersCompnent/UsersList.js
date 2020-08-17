import React, {Component} from 'react'

class UsersList extends Component {
  render() {
    let users = this.props.users;
    return (
      <div>
      	<h2>Users List</h2>
      	<ol>
      		{ users.map(user => (
      			`${user.username} played ${user.gamesCount} games`
    		)) }
      	</ol>
      </div>
    )
  }
}
export default UsersList;