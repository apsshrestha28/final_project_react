import React from 'react';

const DriverDetails = ({ first_name, last_name, description, email, 
 address, phone_number}) => {
   return (
    <div style={{padding:'7px'}}>
       <p> Name = {first_name} {last_name}</p>
       <p>Address = {address}</p>
       <p>Phone Number = {phone_number}</p>
       <p>Email = {email}</p>
       <p>Description = {description}</p>
     </div>
   )
 }
 export default DriverDetails;