import React, {Component} from 'react'

class UsersForm extends Component {
  state = {
    userName: '',
    firstName: '',
    lastName: '',

    
  }
  handelChange = (event,option) => {
    this.setState(currentState=>({
      [option] : event
    }))
  }
  handelChangeFirstName = (event) => {
    this.handelChange(event,'firstName');
  }
  handelChangeLastName = (event) => {
    this.handelChange(event,'lastName');
  }
  handelChangeUserName = (event) => {
    this.handelChange(event,'userName');
  }
  addUser = (event) => {
    event.preventDefault();
    console.log('here');
    let newUser={
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gamesCount: 0,
      showGames:true
    }
    console.log(newUser);
    this.props.addUser(event,newUser);
  }
  buttonIsDisabled = () => {
    if (!(this.state.userName && this.state.firstName && this.state.lastName)) {
      return 'true';
    }
  }
  render (){
    return (
      <div>
        <h2>Add Users</h2>
      	  <form onSubmit={this.addUser}>
      		<input
      		  type='text'
      		  placeholder='User name'
      		  value={this.state.userName}
			  onChange={(event) => this.handelChangeUserName(event.target.value)}
      		/>
      		<input
      		  type='text'
      		  placeholder='First name'
      		  value={this.state.firstName}
			  onChange={(event) => this.handelChangeFirstName(event.target.value)}
      		/>
      		<input
      		  type='text'
      		  placeholder='Last name'
      		  value={this.state.lastName}
			  onChange={(event) => this.handelChangeLastName(event.target.value)}
      		/>
      		<button disabled={this.buttonIsDisabled()}>
      		  Add user
      		</button>
			{this.props.errorMSG && (
             	<h3 style={{color:'red'}}>{this.props.errorMSG}</h3>
             )}
      
      	  </form>
      </div>
    )
  }
}
export default UsersForm;
