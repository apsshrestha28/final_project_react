import React, { Component } from 'react';
import {User} from '../requests';
import DriverDetails from './DriversDetails';
import {Review} from '../requests';
import ReviewList from './ReviewList';
import {Link} from 'react-router-dom';

class DriverShowPage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      user: {},
      reviews: []
     }
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    User.show(this.props.match.params.id)
      .then(user => {
        this.setState((state)=>{
          return {
            user: user
          }
        })
        Review.index(user)
        .then(reviews => {
          this.setState((state)=>{
            return {
              reviews: reviews
            }
          })
        })
        console.log(user);
      
      }) 
  }

  handleSubmit(event){
    const formData = new FormData(event.currentTarget);
    const params = {
      body: formData.get('body'),
      rating: 5,
      user_id: this.state.user.id
    };
      Review.create(params)
       .then((review)=> {
        this.props.history.push(`/users/${this.state.user.id}`)

      })
  }
  render() { 
    return ( 
      <main className='showImg' style={{color:'white', padding:'2rem'}}>
        <DriverDetails
        first_name= {this.state.user.first_name}
        last_name= {this.state.user.last_name}
        address= {this.state.user.address}
        email= {this.state.user.email}
        phone_number= {this.state.user.phone_number}
        description= {this.state.user.description}
        />

     <Link to={`/users/${this.state.user.id}/ride_requests`}><button className="btn btn-primary btn-sm" type="button">RIDE REQUEST </button></Link>
     
        <form onSubmit={this.handleSubmit} >
          <p>Write a review</p>

          <div style={{padding:'7px', fontSize:'1.2rem'}}>  
            <textarea name='body' id='body' cols = '40' rows = '1' style={{border: '1px solid black'}} ></textarea>
            <button className="btn btn-primary btn-sm" style={{marginLeft:'.3rem', marginTop: '-1.3rem'}} type="submit">Submit</button>
           
          </div>
        </form>      
      
        <ReviewList reviews={this.state.reviews}/>
     
      </main> 
    );
  }
}
 
export default DriverShowPage;