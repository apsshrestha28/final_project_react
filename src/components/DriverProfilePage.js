import React , {Component} from 'react';
import {Session} from '../requests';
import {RideRequest} from '../requests';
import {Customer} from '../requests';
import Table from 'react-bootstrap/Table'

class DriverProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      ride_requests: [],
      customers: []
    }
    this.acceptRequest = this.acceptRequest.bind(this);
    this.declineRequest = this.declineRequest.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then((user) => {
        this.setState((state) => {
            return {
              user: user
            }})
          RideRequest.show(user)
            .then(ride_requests => {
              this.setState((state) => {
                return {
                  ride_requests: ride_requests
                }
              })
              ride_requests.map(ride_request => {   
                Customer.show(ride_request.customer_id)
                .then(customer => {
                  this.setState(previousState => {
                    return {
                      customers: [...previousState.customers, customer]
                    }    
                });        
                })  
              })    
            })          
      })   
  }

  acceptRequest(params){
    
  }

  declineRequest(params){

  }
  
   render(){
    return(
      <main className='bgImage'>
        <h4 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white',fontFamily:'serif'}}>Your Profile Page</h4>   
        <div style={{color:'white',marginLeft:'1.5rem'}}>
            <p key={this.state.user.id}> </p>
            <p>Name  = {this.state.user.first_name} {this.state.user.last_name}</p>
            <p>Address = {this.state.user.address}</p>
            <p>Email = {this.state.user.email}</p> 
            <p>Phone Number = {this.state.user.phone_number} </p>       
            <p>Description = {this.state.user.description} </p>
            <p>Driving License Number = {this.state.user.driver_license_number} </p>
        </div>

        <div style={{ padding:'22px'}}>
          <h6 style={{color:'black'}}><u>Ride Requests List</u></h6>
          <Table striped bordered hover variant="dark">
            <thead  style= {{fontSize:'.8rem'}}>
              <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
                <th> Accept </th>
                <th> Decline </th>
              </tr>
            </thead>
            <tbody style= {{fontSize:'.8rem'}}>        
              {this.state.ride_requests.map((c, index) => {
                if(this.state.customers[index]){ 
                  return(
                    <tr key={c.id}>
                      <td>{index + 1} </td>
                      <td>{this.state.customers[index].first_name}</td>
                      <td>{this.state.customers[index].last_name}</td>
                      <td>{this.state.customers[index].address} </td>
                      <td> {c.ride_date}</td>
                      <td> {c.ride_time.substring(11,16)}</td>
                      <td> <button onClick={() => this.acceptRequest(c.id)}>Accept</button></td>
                      <td> <button onClick={() => this.declineRequest(c.id)}>Decline</button></td>           
                    </tr>
                  )
                }
              })}       
            </tbody>
          </Table>                     
        </div>
      </main>
    )
  }
}
 
export default DriverProfilePage;