import React, { Component } from "react";
// import { getClientById } from "../utilities/async";

// import { jsonToDateString } from "../utilities/general";
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { data } from "jquery";



class Client extends Component {

//  constructor() {
//    super();
//    this.state = {
//      clients: []
//    }
//  }


  state = {
    client: {}
    }




  // ----- Calling ----- //
  componentDidMount() {
    // getClientById(this.props.match.params.id).then(client => {
    //   this.setState({ client });
    // });
    // const url = "https://api.randomuser.me/";
    // const url = "api/clients";
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);

    // this.getClient();


    // awaitfetch(`/api/clients`)
    // .then(res => res.json())
    // .then(clients => this.setState({ clients }, () => console.log("Clients Fetched..", clients)));

    this.getClient("5f2ee5c32704b2537495e6af");
  }



  // getClient = async () => {

  //   const response = await fetch(`/clients`);
  //   const data = await response.json();
  //   console.log(data);

  // }
  // axios.get(`/api/clients/`, {
  //   params: {
  //     id: this.props.match.params.id
  //   }

  // })



  getClient = (id) => {


    //   fetch(`/api/clients/${id}`, {
    //     method: "GET"
    //     }
    //   )
    //   .then(res => {
    //     console.log('res', res);
    //     if (res.ok) {
    //       console.log("success")
    //     } else {
    //       console.log("fail")
    //     }
    //   })
    //   .then(data => console.log(data))
    //   .catch(error => console.log("error"))

    axios.get(`/api/clients/${id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ client: data });
        console.log(this.props.match.params.id);
        console.log(data);
        document.getElementById("ClientName").innerHTML = data.firstName;
        document.getElementById("ban").innerHTML = "Welcome to the dashboard, " + data.firstName + "!";
        console.log("Data has been received Succesfully!");
      })
      .catch((error) => {
        console.log("There is an error, Sorry");
      });
  };

  render() {

    const { client } = this.state;

    //  const id = this.props.match.params.id;

    // const { client } = this.state;

    return(
      <div className = "clientWrapper">


          <div className = "dashBanner"> 
              <p>Welcome to your Dashboard {client.firstName + " " + client.lastName}</p>
              <Button color="primary" className="hvr-grow display-1" id="btnCompany">Update Contact Info</Button>
              <Button color="secondary" className="hvr-grow display-1" id="btnCompany">Update Bundle Choice</Button>
              <Button color="warning" className= "hvr-grow display-1" id="btnCompany">Change Password</Button><div className = "dashUpdates"></div>
          </div>

        <div className = "dashStats"><h1>Your Profile:</h1>
            <ul>
              <li>Client Since: {client.dateAdded}</li>
              <li>Subscription: {client.bundle}</li>
              <li>Email: {client.email}</li>
              <li>Address Served: {client.address + " " + client.city + ", " + client.state + " " + client.zipcode}</li>
              <li>City: {client.city}</li>
              <li>State: {client.state}</li>
              <li>Last Service Date: </li>
              <li>Work Completed: </li>
              <li>Next Service Date:</li>
              <li>Upcoming Work: </li>
              <li></li>
            </ul>
            
            </div>
            
            <div className = "dashFeedback"><h1>Feedback:</h1><h3> {client.firstName + ", "}tell us how we are doing or request a specific need for your next service </h3>
            <Form method="post" action="mailto:lcole.engr@gmail.com">
              <FormGroup>
   
                <h1><Input type = "textarea" name="text" id = "feedback" bsSize="lg"/></h1>
              </FormGroup>
            <Button>Submit Feedback</Button>
            </Form>
            </div>
            <div className = "techCorner"><h1>Technician Notes: </h1></div>
            

      </div>
    )
  }




}



export default Client

