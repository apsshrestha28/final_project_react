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
      <main className = "bgImage" style={{height:'400px'}}>
        <br/>
        <h4 style={{textAlign: 'center', color:'black',border:' 1.5px solid black', backgroundColor:'white', marginTop:'-1.5rem'}}>Drivers Nearby :</h4>
        <ol style={{ marginLeft:'4.3rem', padding: '2px', fontSize:'1.3rem',color:'white'}} >
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
