import React , {Component} from 'react';
import {Session} from '../requests';
import {RideRequest} from '../requests';
import  {User} from '../requests';
import Table from 'react-bootstrap/Table'
import { BiCurrentLocation} from "react-icons/bi";
import { GoLocation} from "react-icons/go";
import { CgMail} from "react-icons/cg";
import { AiFillPhone} from "react-icons/ai";

class CustomerProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {},
      ride_requests: [],
      users: []
    }
  }
  componentDidMount() {
    Session.currentUser()
      .then((customer) => {
        this.setState((state) => {
           return {
             customer: customer
           }})
        RideRequest.index()
          .then(ride_requests => {       
            this.setState((state) => {
              return{
                ride_requests: ride_requests.filter(a => a.customer_id ===  customer.id)        
              }   
            })
            this.state.ride_requests.map(ride_request => {
              User.show(ride_request.user_id)
                .then(user => {
                  this.setState(previousState => {
                    return {
                      users : [...previousState.users, user]
                    }
                  })
                })
            })
          })   
      })
  }
  render(){
    return(   
      <main className='bgImage'>     
        <h3 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white',fontFamily:'serif'}}>Your Profile Page</h3>
        <div style={{color:'white', marginLeft:'1.5rem'}}>
            <p key={this.state.customer.id}> </p>
            <h5 style={{color:'black', fontSize:'1.5rem'}}> {this.state.customer.first_name} {this.state.customer.last_name}</h5>
            <p><BiCurrentLocation /> {this.state.customer.address}</p>
            <p><GoLocation /> {this.state.customer.destination_address}</p>
            <p><CgMail /> {this.state.customer.email}</p> 
            <p><AiFillPhone/>  {this.state.customer.phone_number} </p>  
        </div>
        <div style={{ padding:'22px'}}>
          <h5 style={{color:'black'}}><u>Ride Request List</u></h5>
          <Table striped bordered hover variant="dark">
            <thead  style= {{fontSize:'.8rem'}}>
              <tr>
                <th>S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Ride Date</th>
                <th>Ride Time</th>
                <th>Status</th>     
              </tr>
            </thead>
            <tbody style= {{fontSize:'.8rem'}}> 
              {this.state.ride_requests.map((ride_request,index) => {
                if(this.state.users[index]) {
                  return (
                    <tr key={ride_request.id}>
                      <td>{index + 1} </td>
                      <td>{this.state.users[index].first_name}</td>
                      <td>{this.state.users[index].last_name}</td>
                      <td>{this.state.users[index].address} </td>
                      <td>{ride_request.ride_date}</td>
                      <td>{ride_request.ride_time.substring(11,16)}</td>
                      <td>{ride_request.status}</td>         
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

export default CustomerProfilePage;