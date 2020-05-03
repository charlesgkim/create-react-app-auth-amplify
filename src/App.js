import React, { Component } from 'react';
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
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
