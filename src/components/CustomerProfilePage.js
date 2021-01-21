import React , {Component} from 'react';
import {Customer} from '../requests';



class CustomerProfilePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      customer: []
    }
  }

  componentDidMount() {
    Customer.index()
      .then((customer) => {
        this.setState((state) => {
           return {
             customer: customer
           }})
      })
  }
  render(){
    return(
      
      <main>
        <br/>
        <h5 style= {{marginLeft: '.5rem'}}>Your Profile Page</h5>
        <div style={{padding: '10px', lifeStyle:'none'}}>
          {this.state.customer.map(c => {
            return(
              < h6 key={c.id}> 
               <p>Name  = {c.first_name} {c.last_name}</p>
              <p>Address = {c.address}</p>
              <p>Email = {c.email}</p> 
               <p>Phone Number = {c.phone_number} </p> 
            
               </h6>
            
          )
          })}
        
        </div>
      </main>
    )
  }
}

export default CustomerProfilePage;