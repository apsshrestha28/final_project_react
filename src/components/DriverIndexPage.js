import React,{Component} from 'react';
import {User} from '../requests';
import {Link} from 'react-router-dom';
import GoogleAPI from './GoogleAPI';


class DriverIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }    
  }

  componentDidMount() {
    User.index()
      .then((users) => {
        console.log(users);
        this.setState((state) => {
          return {
           users: users
          }})
      })   
  }
  render() { 
    return ( 
      <main>
        <br/>
        <h5 style={{marginLeft:'.5rem'}}>Drivers Nearby :</h5>
        <ul style={{ padding: '10px', listStyle:'none'}}>
          {
            this.state.users.map(user => {  
              return(
                <li key={user.id}>

              <Link key={user.id} to={`/users/${user.id}`}> {user.first_name} {user.last_name}</Link>
              <br/>

              <GoogleAPI {...user} />
              <br/>
               
                </li>
              )
            })
          }
        </ul>
      </main>
     );
  }
}
 
export default DriverIndexPage;
