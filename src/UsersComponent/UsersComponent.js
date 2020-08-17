import React, {Component} from 'react'
import UsersList from './UsersList'
import UsersForm from './UsersForm'

class UsersComponent extends Component {
  state = {
    users: [
      {
        userName:'mohamed',firstName:'Ali',gamesCount:50,showGames:false
      },
      {
        userName:'mohamed1',firstName:'Ali',gamesCount:50,showGames:false
      },
      {
        userName:'mohamed2',firstName:'Ali',gamesCount:50,showGames:false
      },
      {
        userName:'mohamed3',firstName:'Ali',gamesCount:50,showGames:false
      },
      {
        userName:'mohamed4',firstName:'Ali',gamesCount:50,showGames:false
      },
    ],
    errorMSG:''
  }
  addUser = (event,newUser) => {
    this.setState(currentState => {
      console.log("here2");
      let unique=true;
      currentState.users.forEach(user=>{
        if(user.userName===newUser.userName) unique=false;
      })
      if( !(newUser.userName && newUser.lastName && newUser.firstName)) {
        return ({errorMSG: 'Please fill all the required fields'});
      } else if(!unique) {
        return ({errorMSG: 'A user with this name already exists!'});
      } else {
        return ({users: [...currentState.users, newUser],
                errorMSG:''});
      }
    })
  }
  showHideGames=(index)=>{
    this.setState(currentState => {
      currentState.users[index].showGames=!currentState.users[index].showGames;
      return {users: currentState.users};
    })
    
  }
  
  render () {
    return (
    <div>
      <UsersForm addUser={this.addUser} errorMSG={this.state.errorMSG}/>
      <UsersList users={this.state.users} showHideGames={this.showHideGames}/>
	</div>
    )
  }
  
  
}
export default UsersComponent