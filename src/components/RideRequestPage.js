import React from 'react';
import {RideRequest, Session} from '../requests';

const RideRequestPage = (props) => {

 function handleSubmit(event) {
   event.preventDefault();
   const {currentTarget} = event;
   const fD = new FormData(currentTarget);

   const newRideRequest = {
     ride_date: fD.get("ride_date"),
     ride_time: fD.get("ride_time"),
     status: "",
     user_id: props.match.params.id
  
   };

   RideRequest.create(newRideRequest)
   .then(res => {
     alert("ride request created");
   })
  

 }
 



    return (
      <main>
         <h5 style={{backgroundColor:'pink',textAlign:'center',fontFamily:'serif'}}>CREATE A RIDE REQUEST</h5>

        <form style={{padding:'2rem',color:'white'}} onSubmit={handleSubmit}>
           
        <div className="form-group row">
          <label htmlFor="" className="col-sm-3 col-form-label">Select Day*</label>
          <input type="date" name="ride_date" required= "required" id="ride_date" />
        </div>

        <div className="form-group row">
          <label htmlFor="" className="col-sm-3 col-form-label">Select Time*</label>
          <input type="time" name="ride_time" required= "required" id="ride_time" />
        </div>

        <button type="submit" className="btn btn-primary btn" style={{marginLeft:'20.6rem'}}>Ride Request</button>

        </form>
      </main>
      );
  
}
 
export default RideRequestPage;