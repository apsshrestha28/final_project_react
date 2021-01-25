import React from 'react';

const ReviewDetails = (props)=>{
  const body = props.body;

  const created_at = props.created_at;
  return(
    <div>
       <p>{body}</p>
        created on {created_at.toLocaleString()}
        <br/>
        <br/>
    </div>
  )
}
export default ReviewDetails;