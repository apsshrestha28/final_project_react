import React , {Component} from 'react';
import {Session} from '../requests';

class CustomerProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {}
    }
  }

  componentDidMount() {
    Session.currentUser()
      .then((customer) => {
        this.setState((state) => {
           return {
             customer: customer
           }})
      })
  }
  render(){
    return(   
      <main className='bgImage'>     
        <h4 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white',fontFamily:'serif'}}>Your Profile Page</h4>
        <div style={{color:'white', padding:'2px',fontSize:'1.3rem'}}>
            <p key={this.state.customer.id}> </p>
            <p>Name  = {this.state.customer.first_name} {this.state.customer.last_name}</p>
            <p>Address = {this.state.customer.address}</p>
            <p>Email = {this.state.customer.email}</p> 
            <p>Phone Number = {this.state.customer.phone_number} </p>  
        </div>
      </main>
    )
  }
}

export default CustomerProfilePage;