import React from 'react';
import ReviewDetails from './ReviewDetails';

const ReviewList = (props) => {
  const reviews = props.reviews;
  const customers = props.customers;
 
  return(
    <ul style= {{listStyle:'none'}}>
      {
        reviews?
          reviews.map((review,index) => {
            if(customers[index]){
              return (      
                <li key={review.id}>
                  <ReviewDetails
                    id={review.id}
                    customer = {customers[index].first_name}
                    body={review.body}
                    created_at={new Date(review.created_at).toDateString() }
                  />
                </li>
              )
            }
          })
        :
        null
      }
    </ul>
  )
}

export default ReviewList;
