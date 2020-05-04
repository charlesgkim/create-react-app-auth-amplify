import React, { Component } from 'react';
import $ from 'jquery';
import 'datatables.net';
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

          <table id="member" class="display" style="width:100%">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Password</th>
                      <th>Name</th>
                      <th>Tel</th>
                      <th>Mail</th>
                      <th>Position</th>
                      <th>Permission</th>
                      <th>Leaves</th>
                      <th>Note</th>
                  </tr>
              </thead>
          </table>    
        <header className="App-header">
          <pre>Learn React</pre>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
