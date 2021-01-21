
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCarAlt } from 'react-icons/fa';

const Navbar =(props) =>{
  function handleSignOutButtonClick() {
    props.destroySession();
  }
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <span>       
        <FaCarAlt style={{color:'orange', width: '2rem', height:'2.5rem'}}/>
        <span style={{fontSize:24,color:'white',marginLeft:'.5rem'}}>Ride share</span> 
      </span>
      <span style={{float: 'right'}}>
        <NavLink to ='/'><button className="btn btn-primary btn-sm" type="button">Home</button></NavLink>

        <NavLink to ='/users'><button className ="btn btn-primary btn-sm" type="button" style={{marginLeft:'1rem', marginRight:'1rem'}}>Drivers List</button></NavLink>

        <NavLink to ='/customer'><button className ="btn btn-primary btn-sm" type="button" style={{marginLeft:'1rem', marginRight:'1rem'}}>Customer</button></NavLink>

      
      {
        props.currentUser ?(
              <>
              <span style={{color:'white'}}> Hello! {props.currentUser.first_name}</span>
              <button onClick={handleSignOutButtonClick} className="btn btn-danger btn-sm" style={{marginLeft:'1rem'}}>Sign Out
              </button>  
              </>
        ):
        (<>
        <NavLink to='/sign_in'><button className="btn btn-primary btn-sm" type="button" style={{marginLeft:'1rem'}}>SignIn</button></NavLink>

        <NavLink to='/sign_up/driver'> <button className="btn btn-primary btn-sm" type="button" style={{marginLeft:'1rem'}}>SignUp As Driver</button></NavLink>

        <NavLink to='/sign_up/customer'><button className="btn btn-primary btn-sm" type="button" style={{marginLeft:'1rem'}}>SignUp As Customer</button></NavLink>
        </>
        )}
      </span>
    </nav>
  );
}
export default Navbar;