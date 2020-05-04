import React, { Component } from 'react';
import {Tbl} from './Tbl';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

let elem = document.createElement('div');
document.body.appendChild(elem);

$(document).ready(function() {
  $('#member').DataTable({
    "ajax": {
        "url": "https://0ik98nbwxb.execute-api.eu-west-2.amazonaws.com/dev/members",
        "dataSrc": ""
     },
    "columns": [
      { "data": "id" },
      { "data": "password" },
      { "data": "name" },
      { "data": "tel" },
      { "data": "mail" },
      { "data": "position" },
      { "data": "permission" },
      { "data": "leaves" },
      { "data": "note" }
    ]
  })
});

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React withe jquery datatable.net</h1>
        </header>
        <Tbl data="">
        </Tbl>      
      </div>
    );
  }
}

export default withAuthenticator(App, true);
