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
        this.setState((state) => {
          return {
           users: users
          }})
      })   
  }
  render() { 
    return ( 
      <main className = "bgImage">
        <h3 style={{textAlign: 'center', color:'black',border:' 1.5px solid black',fontFamily:'serif', backgroundColor:'white'}}>Drivers Nearby :</h3>
        <ol style={{ marginLeft:'1rem', fontSize:'1.3rem',color:'white', margin:'0rem'}} >
          {
            this.state.users.map(user => {  
              return(
                <li key={user.id}>
                  <u><Link key={user.id} to={`/users/${user.id}`} style={{color:'white'}}> {user.first_name} {user.last_name}</Link></u>
                  <GoogleAPI {...user} />
                  <br/> 
                </li>
              )
            })
          }
        </ol>
      </main>
     );
  }
}
export default DriverIndexPage;
