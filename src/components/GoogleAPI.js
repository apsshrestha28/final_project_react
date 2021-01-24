import {getDistance} from 'geolib';
import _ from 'lodash';
import {Customer} from '../requests';
import {Session} from '../requests';
import React, { Component } from 'react';

export default class Locations extends Component{
  constructor(props){
    super(props);
    this.state = {  
      destinationLat: props.latitude,
      destinationLong: props.longitude,
      distance:null,
      startLat:49.17400863733187,
      startLong:-122.85864227382395
    }
  }
  
    componentDidMount(){
      Customer.index()
       .then(
         customers => {
           Session.currentUser().then(current => {
            console.log(customers);
            console.log(current);
            const currentCustomer = customers.filter(customer => customer.id === current.id)[0];
            console.log(currentCustomer);
            var dis = getDistance(
              {latitude: currentCustomer.latitude, longitude: currentCustomer.longitude},
              {latitude: this.state.destinationLat, longitude: this.state.destinationLong}
            );
            this.setState({
  
              distance:  _.round((dis/1000),1)
  
            });
            console.log(this.state.distance);
           })
           
         }
       )
       
    };





    render(){
        return(
            <div>{this.state.distance} km away</div>
        );
    }
}
