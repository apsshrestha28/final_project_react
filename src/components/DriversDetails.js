import React from 'react';
import { BiCurrentLocation} from "react-icons/bi";
import { CgMail} from "react-icons/cg";
import { AiFillPhone} from "react-icons/ai";

const DriverDetails = ({ first_name, last_name, description, email, 
 address, phone_number}) => {
   return (
    <div style={{color:'white',marginLeft:'.9rem'}}>
        <h5 style={{color:'black',fontSize:'1.6rem'}}>   {first_name} {last_name}</h5>
        <p> {description} </p>
        <p><BiCurrentLocation /> {address} </p>
        <p><CgMail /> {email}</p> 
        <p><AiFillPhone/> {phone_number} </p>  
     </div>
   )
 }
 export default DriverDetails;