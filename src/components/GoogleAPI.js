import {getDistance} from 'geolib';
import _ from 'lodash';



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
        var dis = getDistance(
            {latitude: this.state.startLat, longitude: this.state.startLong},
            {latitude: this.state.destinationLat, longitude: this.state.destinationLong},
          );
          this.setState({

            distance:  _.round((dis/1000),1)

          });
          console.log(this.state.distance);
    };
    render(){
        return(
            <div>{this.state.distance} km away</div>
        );
    }
}
