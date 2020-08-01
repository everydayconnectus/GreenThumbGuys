// React Dependencies.
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';


// Stylesheet Definitions.
import './App.css'; // Global CSS Site Styling.

// Media Breakpoints.
import './css/320px.css'; /* smartphones, iPhone, portrait 480x320 phones */
import './css/540px.css'; /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
import './css/641px.css'; /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
import './css/964px.css'; /* tablet, landscape iPad, lo-res laptops ands desktops */
import './css/1026px.css'; /* hi-res laptops and desktops */
import './css/1309px.css';
import './css/1652px.css';

// Bootstrap Definitions.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS Library.
import 'bootstrap/dist/js/bootstrap.min.js'; // Bootstrap JS Library.

// All React Component Definitions.
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Register from './components/Register';
import Login from './components/Login';
import Client from './components/Client';

// Draw Component Class.




const mockAuth = {
  isAuthenticated: false,    // isauthenticated needs to be changed to true here for access to page
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100)  //fake async
  },
  logout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const PrivateRoute = ({component: Component, ...rest}) =>(
  <Route {...rest} render ={({location}) =>(
    mockAuth.isAuthenticated ===true
    ? <Component {...rest}/>
    : <Redirect to ={{
      pathname: "/login",
      state: {from: location}
    }}/>
  )}/>
)




class App extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    mockAuth.authenticate(()=>{
      this.setState(()=>({
    redirectToReferrer: true
      }))
    })
  }



  render() {

    const {redirectToReferrer} = this.state
    if (redirectToReferrer ===true){
      return(
        <Redirect to = "/client" />
      )
    }
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/client" component={Client} />
            
          </Switch>
        </div>
      </Router>
    )
  }
}

// Export Component.
export default App;
