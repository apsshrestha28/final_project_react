import React from 'react';
import ReviewDetails from './ReviewDetails';

const ReviewList = (props) => {
  const reviews = props.reviews;
  return(
    <ul>
      {
        reviews?
          reviews.map(review => {
            return (      
              <li key={review.id}>
                <ReviewDetails
                  id={review.id}
                  body={review.body}
                  rating={review.rating}
                  created_at={new Date(review.created_at).toDateString() }
                />
              </li>
            )
          })
        :
        null
      }
    </ul>
  )
}

export default ReviewList;
