import React , {Component} from 'react';
import {Session} from '../requests';
import {Review} from '../requests';
import ReviewList from './ReviewList';
import {RideRequest} from '../requests';
import {Customer} from '../requests';
import Table from 'react-bootstrap/Table'
import _ from 'lodash';
import { BiCurrentLocation} from "react-icons/bi";
import { CgMail} from "react-icons/cg";
import { AiFillPhone} from "react-icons/ai";
import {IoCardSharp } from "react-icons/io5";

class DriverProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      ride_requests: [],
      customers: [],
      reviews: []
    }
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then((user) => {
        this.setState((state) => {
            return {
              user: user
            }})
          Review.show(user)
            .then(reviews => {
              this.setState((state) => {
                return {
                  reviews: reviews
                }
              })
            })
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

  acceptRequest(id, status){
    const actionParms = {
      id : id,
      status: status
    }
    RideRequest.update(actionParms)
      .then((s => {
        window.location.reload(true);
      }))
  }

  
   render(){
    return(
      <main className='bgImage'>
        <h3 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white',fontFamily:'serif'}}>Your Profile Page</h3>   
        <div style={{color:'white',marginLeft:'1.5rem'}}>
            <p key={this.state.user.id}> </p>
            <h5 style={{color:'black',fontSize:'1.6rem'}}> {this.state.user.first_name} {this.state.user.last_name}</h5>
            <p> {this.state.user.description} </p>
            <p><BiCurrentLocation /> {this.state.user.address} </p>
            <p><CgMail /> {this.state.user.email}</p> 
            <p><AiFillPhone/> {this.state.user.phone_number} </p>       
            <p>< IoCardSharp/> {this.state.user.driver_license_number} </p>
        </div>

        <div style={{ padding:'22px'}}>
        <h5 style={{color:'black'}}><u>Reviews</u></h5>
          <ReviewList reviews={this.state.reviews}/>
        </div>

        <div style={{ padding:'22px'}}>
          <h5 style={{color:'black'}}><u>Ride Requests Pending List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead  style= {{fontSize:'.8rem'}}>
              <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Destination Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
                <th>Accept</th>
                <th>Decline</th>
              </tr>
            </thead>
            <tbody style= {{fontSize:'.8rem'}}> 
              {this.state.ride_requests.filter(a => a.status === '').map((c, index) => {  
                if(this.state.customers[index]){ 
                  return(
                    <tr key={c.id}>
                      <td>{index + 1} </td>
                      <td>{this.state.customers[index].first_name}</td>
                      <td>{this.state.customers[index].last_name}</td>
                      <td>{this.state.customers[index].address}</td>
                      <td>{this.state.customers[index].destination_address}</td>
                      <td>{c.ride_date}</td>
                      <td>{c.ride_time.substring(11,16)}</td>
                      <td><button onClick={() => this.acceptRequest(c.id, 'accept')} className= 'btn btn-success btn-sm'>Accept</button></td>
                      <td> <button onClick={() => this.acceptRequest(c.id , 'decline')} className= 'btn btn-danger btn-sm'>Decline</button></td>           
                    </tr>
                  )
                }

              })}       
            </tbody>
          </Table>                     
        </div>

        <div style={{ padding:'22px'}}>
          <h5 style={{color:'black'}}><u>Ride Requests Accepted List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead  style= {{fontSize:'.8rem'}}>
              <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Destination Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
              </tr>
            </thead>
            <tbody style= {{fontSize:'.8rem'}}> 
              {this.state.ride_requests.filter(a => a.status === 'accept').map((c, index) => {  
                if(this.state.customers[index]){ 
                  return(
                    <tr key={c.id}>
                      <td>{index + 1} </td>
                      <td>{this.state.customers[index].first_name}</td>
                      <td>{this.state.customers[index].last_name}</td>
                      <td>{this.state.customers[index].address}</td>
                      <td>{this.state.customers[index].destination_address}</td>
                      <td>{c.ride_date}</td>
                      <td>{c.ride_time.substring(11,16)}</td>        
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