import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { Session } from './requests';
import SignInPage from './components/SignInPage';
import SignUpPageForCustomer from './components/SignUpPageForCustomer';
import SignUpPageForDriver from './components/SignUpPageForDriver';
import DriverIndexPage from './components/DriverIndexPage';
import WelcomePage from './components/WelcomePage';
import AuthRoute from './components/AuthRoute';
import Navbar from './components/Navbar';
import CustomerProfilePage from './components/CustomerProfilePage';

import DriverProfilePage from './components/DriverProfilePage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount(){

    Session.currentUser()
    .then(user => {
      this.setState(state => {
        return {
          user: user
        }
      })
    })
  }

  handleSubmit(params) {
   
    Session.create(params)
      .then(() => {
        return Session.currentUser()
      })
      .then(user => {
        this.setState(state => {
          return {
            user: user
          }
        })
      })
  }
  destroySession() {
    Session.destroy()
      .then(res => {
        this.setState((state) => {
          return {
            user: null
          }
        })
      })
  }

  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
        <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
          
            <Route exact path = '/' component = {WelcomePage}/>
            <AuthRoute exact
              path='/users'
              isAuth={this.state.user}
              component={DriverIndexPage}
            />
          
            <Route exact path = '/sign_in' render = {routeProps => <SignInPage handleSubmit= {this.handleSubmit} {...routeProps}/>}/>
            <Route exact path = '/sign_up/driver' component = {SignUpPageForDriver}/>
            <Route exact path = '/sign_up/customer' component = {SignUpPageForCustomer}/>
           
         <Route exact path = '/customer' component= {CustomerProfilePage} />
         <Route exact path = '/users/:id' component = {DriverProfilePage}/>
          
           
          </Switch>
        </BrowserRouter>     
      </div>
    );
  }
}
export default App;
