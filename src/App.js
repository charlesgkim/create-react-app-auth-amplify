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
  
  dataSet = [["Joshua","londonubf!23","Joshua Kim","07710 168455","JoshuaKim@sekyee.co.uk","Director","3","3/20",""],["Daniel","daniel123","Daniel Targain","07786 363054","DanielTargain@sekyee.co.uk","HR Manager","3","","Admin Skype Name/Password=daniel.targain/d*****!23\r\npaypal=targain@gmail.com/u*u**_1**\r\n\r\nProfile name  SaveCancel\r\n\r\nCalling channels\t 1 channels \t\r\nOutgoing calls\t Manage Credit   Manage Auto-recharge\t\r\nMaking regular calls to the US?\r\nSet up US minute bundles\t\r\nCaller ID \t Set up Caller ID\t\r\nIncoming calls\t+442071936844 Click to edit\t\r\ntargain.floral.designs\tView account details\r\nRemove account\t\r\nAdd a number or business account\r\n\r\nYour Skype Connect SIP password\r\nSkype Number: +44 20 8123 1338\r\nHere's the password for \"Targain Floral Design\" -- your Skype Connect SIP profile.\r\nSIP User: 99051000239476\r\nSkype Connect address: sip.skype.com\r\nUDP Port: 5060\r\nPassword: QSbH3M5FS7eZrb\r\nSkype"]]
}

export default withAuthenticator(App, true);
