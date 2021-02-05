import {getDistance} from 'geolib';
import _ from 'lodash';
import {Customer, Session} from '../requests';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Locations extends Component{
  constructor(props){
    super(props);
    this.state = {  
      destinationLat: props.latitude,
      destinationLong: props.longitude,
      distance: []
      

    }
  }
  componentDidMount(){
 
    Customer.index()
      .then(
        customers => {
          Session.currentUser()
            .then(current => {
                const currentCustomer = customers.filter(customer => customer.id === current.id)[0];
            
                let dis = getDistance(
                  {latitude: currentCustomer.latitude, longitude: currentCustomer.longitude},
                  {latitude: this.state.destinationLat, longitude: this.state.destinationLong}
                );
                this.setState({
                  distance:  [_.round((dis/1000),1)]
                })
                
              })
        }
      )
  }            
        
  render(){
      return(  
        <div>
          {this.state.distance > 0 && this.state.distance < 10  ?
          <li key={this.props.id}>
            <u><Link key={this.props.id} to={`/users/${this.props.id}`} className='driverName'> {this.props.first_name} {this.props.last_name}</Link></u>
            <div><button>{this.state.distance} km away</button></div>
            <br/>
          </li>
          : ''   
          }     
        </div>      
      );
  }
}
