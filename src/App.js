import React, { Component } from 'react';
import {Tbl} from './Tbl';
// import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, API } from 'aws-amplify';
import aws_exports from './aws-exports';
// import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
  
Amplify.configure(aws_exports)
Amplify.configure({
  API: {
    endpoints: [
      {
        name: "members",
        endpoint: "https://0ik98nbwxb.execute-api.eu-west-2.amazonaws.com" // your API GW base url
      }
    ]
  }
});

class App extends Component {
  state = {
    loading: true,
    error: null,
    members: []
  }

  async componentDidMount () {
      const apiName = "members";
      const endPoint = "/dev/members";

      let myInit = { 
        headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
      }
      console.log(myInit)

      await API.get(apiName ,endPoint, myInit)
      .then(response => {
        // data object received from api
        console.log(response);
        this.setState({ members: response, loading: false })
      }).catch(error => {
        this.setState({ error, loading: false })
        console.log(JSON.stringify(error))
      });
  }
  render() {
    const {
        loading,
        members
    } = this.state;
    
    return (
      <div className="App"> 
        <div>
          { loading ? (
           <div>loading...</div>
            ) : (
              <Tbl data={members}>
            </Tbl>      
          )}
        </div>
        <header className="App-header">
          <h1 className="App-title">SEKYEE REPORT SYSTEM v2020</h1>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
