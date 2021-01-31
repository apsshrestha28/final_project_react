import React from 'react';
import {BsPersonSquare} from "react-icons/bs";
const ReviewDetails = (props)=>{
  const body = props.body;
  const created_at = props.created_at;
  const customer = props.customer;
  
  return(
    <div style={{padding:'10px'}}>
      <BsPersonSquare style={{fontSize:'25px'}}/>
      <span style={{marginLeft:'1rem', color:'#ffbf00',fontSize:'1.2rem'}}>
        <u>{customer}</u>
      </span>
      <small style={{marginLeft:'.8rem'}}>{created_at.toLocaleString()}</small>
      <p style={{marginLeft:'2.6rem'}}>{body}</p>
     
    </div>
  )
}
export default ReviewDetails;