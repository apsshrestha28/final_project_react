import React from 'react';

const ReviewDetails = (props)=>{
  const body = props.body;
  const rating = props.rating;
  const created_at = props.created_at;
  return(
    <div>
       {body} with rating: {rating} <span>
         created on {created_at.toLocaleString()}
        </span>
        <br/>
        <br/>
    </div>
  )
}
export default ReviewDetails;