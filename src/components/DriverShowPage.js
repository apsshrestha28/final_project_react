import React, { Component } from 'react';
import {User, Review, Customer} from '../requests';
import DriverDetails from './DriversDetails';
import ReviewList from './ReviewList';
import {Link} from 'react-router-dom';

class DriverShowPage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      user: {},
      reviews: [],
      customers: []
     }
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    User.show(this.props.match.params.id)
      .then(user => {
        this.setState((state)=>{
          return {
            user: user
          }})
        Review.show(user)
          .then(reviews => {
            this.setState((state)=>{
              return {
                reviews: reviews
              }
            })
            reviews.map(review => {
              Customer.show(review.customer_id)
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

  handleSubmit(event){
    const formData = new FormData(event.currentTarget);
    const params = {
      body: formData.get('body'),
      rating: formData.get('rating'),
      user_id: this.state.user.id
    };
      Review.create(params)
       .then((review)=> {
        this.props.history.push(`/users/${this.state.user.id}`)

      })
  }
  render() { 
    return ( 
      <main className='bgImage'>
          <h3 className ='headerStyle'>Driver Details</h3>
          <div className='pfList'>
            <DriverDetails
              first_name= {this.state.user.first_name}
              last_name= {this.state.user.last_name}
              address= {this.state.user.address}
              email= {this.state.user.email}
              phone_number= {this.state.user.phone_number}
              description= {this.state.user.description}
            /> 
            <div className='padding-10'>
              <h5 className='title'><u>Make a ride request</u></h5>
              <Link to={`/users/${this.state.user.id}/ride_requests`}><button className="btn btn-primary btn" type="button"> RIDE REQUEST </button></Link>
            </div>

            <div className='padding-10'>              
              <h5 className='title'><u>Write a review</u></h5>
              <form className='reviewForm' onSubmit={this.handleSubmit} >  
                <div className='rating'> 
                  <input type='radio' name='rating' value='5' id='5' />
                    <label htmlFor='5'>☆</label> 
                  <input type='radio' name='rating' value='4' id='4' />
                    <label htmlFor='4'>☆</label> 
                  <input type='radio' name='rating' value='3' id='3' />
                    <label htmlFor='3'>☆</label> 
                  <input type='radio' name='rating' value='2' id='2' />
                    <label htmlFor='2'>☆</label> 
                  <input type='radio' name='rating' value='1' id='1' />
                    <label htmlFor='1'>☆</label>
                </div>  
                
                <textarea name='body' id='body' cols = '30' rows = '1'></textarea>
                
                <button className="btn btn-primary btn-sm" id='button-s' type="submit">Submit</button>                               
              </form> 
            </div>
            <div className='padding-10'>   
              <h6 className='title'><u>Reviews</u></h6>
                <ReviewList reviews={this.state.reviews} customers={this.state.customers}/>
            </div>
        </div>
      </main> 
    );
  }
}
 
export default DriverShowPage;