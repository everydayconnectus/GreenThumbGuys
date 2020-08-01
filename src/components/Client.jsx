import React, { Component } from "react";
// import { getClientById } from "../utilities/async";

// import { jsonToDateString } from "../utilities/general";
import { Button, ButtonGroup } from 'reactstrap';
import axios from "axios";



class Client extends Component {
 
  constructor(){
    super();
    this.state = {
      clients: []
    }
  }


  // state = {
  //   client: {}
  //   }
  



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

    this.getClient("5f19e763bf456310bc137883");
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
  


getClient = (id) =>{


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
    this.setState({ client: data});
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
  
 

  render(){

     // const { client } = this.state;

    //  const id = this.props.match.params.id;

    // const { client } = this.state;


    return(
        <div className = "clientWrapper">


            <div className = "dashBanner"> <p id = "ban"></p>
                {/* <p>Welcome to your Dashboard {client.firstName + " " + client.lastName}</p> */}
                <div className = "dashUpdates"><Button color="primary" className="hvr-grow display-1" id="btnCompany">update contact info</Button>
                <Button color="secondary" className="hvr-grow display-1" id="btnCompany">update Bundle Choice</Button></div>
            </div>




            <div className = "dashStats">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eos quibusdam iste magni omnis culpa voluptatum, quia dolore iure tempora dignissimos possimus earum doloremque expedita neque aut esse vel repellendus!
            Facilis incidunt libero fugiat eius? Excepturi, voluptate at eaque praesentium ullam rem quod unde quaerat consequatur impedit expedita maiores perspiciatis assumenda sunt quia error? Dicta aperiam minus magnam fugiat quibusdam.
            Nulla quod adipisci doloribus eos aspernatur, quasi quae facere mollitia aliquid. Assumenda nihil a, inventore corporis labore accusantium architecto similique dicta, nobis sed harum repellendus culpa! Similique, quae veniam? Cum!
            Quis aperiam eius fugiat delectus accusantium modi quidem rerum tempora aut. Rerum neque, libero, tempore omnis quod necessitatibus facilis adipisci corporis aliquam sunt incidunt dolores quae hic corrupti quis ea.
            Adipisci itaque cum nisi ipsam praesentium, eius ducimus nostrum rem ad animi sint sequi quibusdam nulla repellendus illum labore accusantium dolor mollitia perspiciatis harum qui. Officiis eum nihil laborum quam.
            Atque aut aspernatur, perferendis qui ullam a quod mollitia, magnam sed accusantium inventore reiciendis accusamus commodi at non vel tenetur officiis? Quasi, doloribus omnis. Tempore, non. Numquam repellendus hic sint?
            Nesciunt, doloribus adipisci. Non harum obcaecati, a doloribus totam necessitatibus nobis corrupti possimus veritatis animi iste repudiandae accusantium eligendi aliquam dolore voluptas expedita illum ullam, nisi quisquam sed? Ducimus, asperiores?
            Impedit sapiente similique odio. Dolorum ducimus, magnam eveniet nihil, nostrum atque possimus repudiandae iste deleniti maxime tempora beatae! Sapiente, vero ratione consequuntur eaque quos dignissimos rem quae quisquam ipsam. A.
            Fugiat commodi consequuntur qui voluptatum, quasi incidunt distinctio corporis dolor maxime obcaecati vero suscipit enim? Laboriosam, maiores autem eaque facilis cumque cum unde optio temporibus fuga modi rerum officia tempora.
            Vel amet ullam ipsam deserunt quae aliquid quos similique culpa quod dolores distinctio nostrum corporis nisi excepturi, numquam ratione fugit rem reprehenderit sapiente ipsum nesciunt eum inventore! Eaque, ipsa nesciunt.</div>
            <div className = "techCorner"></div>
            <div className = "dashFeedback"></div>

        </div>
    )
  }




}



export default Client

