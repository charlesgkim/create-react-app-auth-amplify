import React, { Component } from 'react';
import {Tbl} from './Tbl';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React with jquery datatable.net</h1>
        </header>
        <Tbl data={this.dataSet}>
        </Tbl>      
      </div>
    );
  }
  
  dataSet = [["Joshua","londonubf!23","Joshua Kim","07710 168455","JoshuaKim@sekyee.co.uk","Director","3","3/20",""]]
}

export default withAuthenticator(App, true);
