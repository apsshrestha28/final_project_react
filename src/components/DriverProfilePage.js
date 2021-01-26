import React , {Component} from 'react';
import {Session} from '../requests';
import {Review} from '../requests';
import ReviewList from './ReviewList';
import { BiCurrentLocation} from "react-icons/bi";
import { CgMail} from "react-icons/cg";
import { AiFillPhone} from "react-icons/ai";
import {IoCardSharp } from "react-icons/io5";

class DriverProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      customers: [],
      reviews: []
    }
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
      })   
  }
  
   render(){
    return(
      <main className='bgImage'>
        <h3 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white',fontFamily:'serif'}}>Your Profile Page</h3>   
        <div style={{color:'white',marginLeft:'1.5rem'}}>
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
      </main>
    )
  }
}
 
export default DriverProfilePage;