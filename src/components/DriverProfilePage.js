import React, { Component } from 'react';
import {User} from '../requests';
import DriverDetails from './DriversDetails';

class DriverProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      users: {}
     }
  }
 componentDidMount(){
  User.show(this.props.match.params.id)
    .then(users => {
      console.log(users);
      this.setState((state)=>{
        return {
          users: users
        }
      })
    }) 
 }
  render() { 
    return ( 
      <main>
      <DriverDetails
       first_name= {this.state.users.first_name}
       last_name= {this.state.users.last_name}
       address= {this.state.users.address}
       email= {this.state.users.email}
       phone_number= {this.state.users.phone_number}
       driver_license_number= {this.state.users.driver_license_number}
       description= {this.state.users.description}
       latitude = {this.state.users.latitude}
       />

      </main> 
    );
  }
}
 
export default DriverProfilePage;