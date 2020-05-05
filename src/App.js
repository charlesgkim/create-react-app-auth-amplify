import React, { Component } from 'react';
import {Tbl} from './Tbl';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  state = {
    loading: true,
    dataSet: null
  }
  async componentDidMount () {
    const url = "https://0ik98nbwxb.execute-api.eu-west-2.amazonaws.com/dev/members";
    const response = await fetch(url);
    const data = await response.json();
    this.setState( {dataSet: data} );
  }
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React with jquery datatable.net</h1>
        </header>
        <div>
          {this.state.loading || !this.state.dataSet ? (
           <div>loading...</div>
            ) : (
           <div>dataSet..</div>
          )}
        </div>      
        <Tbl data={this.state.dataSet}>
        </Tbl>      
      </div>
    );
  }
}

export default withAuthenticator(App, true);
