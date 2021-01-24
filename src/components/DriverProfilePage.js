import React , {Component} from 'react';
import {Session} from '../requests';

class DriverProfilePage extends Component {
   constructor(props){
     super(props);
     this.state = {
       user: {}
     }
   }

   componentDidMount() {
    Session.currentUser()
      .then((user) => {
        this.setState((state) => {
           return {
             user: user
           }})
      })
  }

   render(){
    return(
      
      <main>
        <h5 style= {{marginLeft: '.5rem'}}>Your Profile Page</h5>         
        <p key={this.state.user.id}> </p>
        <p>Name  = {this.state.user.first_name} {this.state.user.last_name}</p>
        <p>Address = {this.state.user.address}</p>
        <p>Email = {this.state.user.email}</p> 
        <p>Phone Number = {this.state.user.phone_number} </p>       
        <p>Description = {this.state.user.description} </p>
        <p>Driving License Number = {this.state.user.driving_license_number} </p>
      </main>
    )
  }
  }
 
export default DriverProfilePage;