import React, {Component} from 'react'

class UsersList extends Component {

  hideShowGamesCountButton = (user,index) => {
    if (user.showGames){
      return (
        <button onClick={() => this.props.showHideGames(index)}>
        	Hide games count
        </button>
      )
    } else {
      return (
        <button onClick={() => this.props.showHideGames(index)}>
        	Show games count
        </button>
      )
    }    
  }

  render() {
    let users = this.props.users;
    return (
      <div>
      	<h2>Users List</h2>
      	<ol>
      		{ users.map((user,index) => {
    			let gamesCount = user.showGames? user.gamesCount:'*/';
      			return (
                  <li key={user.userName}> 
    				<span>{`${user.userName} played ${gamesCount} games`}        </span>
					{this.hideShowGamesCountButton(user,index)}
				  </li>
				)
			}) }
      	</ol>
      </div>
    )
  }
}
export default UsersList;