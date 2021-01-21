import React from 'react';

const DriverDetails = ({ first_name, last_name, description, email, 
 address , driver_license_number, latitude ,phone_number}) => {
   return (
     <div>
       <p> Name = {first_name} {last_name}</p>
       <p>Address = {address}</p>
       <p>Phone Number = {phone_number}</p>
       <p>Email = {email}</p>
       <p>Description = {description}</p>
       <p>Driving License Number= {driver_license_number}</p>
       <p>LA = {latitude}</p>
     </div>
   )
 }
 export default DriverDetails;