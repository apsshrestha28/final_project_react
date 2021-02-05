import React,{Component} from 'react';
import {User} from '../requests';
import {Link} from 'react-router-dom';
import GoogleAPI from './GoogleAPI';

class DriverIndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      check: []
    }    
  }
  componentDidMount() {
    User.index()
      .then((users) => {
        this.setState((state) => {
          return {
           users: users
          }
        
        })  
      })  
      console.log(this.state.users); 
  }

  render() { 
    return ( 
      <main className="bgImage">
        <h3 className='headerStyle'>Drivers Within 10 km :</h3>
        <ol className='list'>
          {
            this.state.users.map(user => {  
              return(   
                <div>
                  <GoogleAPI {...user} />  
                </div>             
              )
            })
          }
        </ol>
      </main>
     );
  }
}
export default DriverIndexPage;
