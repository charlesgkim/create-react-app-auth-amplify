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
          <h1 className="App-title">React withe jquery datatable.net</h1>
        </header>
        <Tbl data={this.dataSet}>
        </Tbl>      
      </div>
    );
  }
  
  dataSet = [{"id":"Joshua","password":"londonubf!23","name":"Joshua Kim","tel":"07710 168455","mail":"JoshuaKim@sekyee.co.uk","position":"Director","permission":"3","leaves":"3/20","note":""},{"id":"Daniel","password":"daniel123","name":"Daniel Targain","tel":"07786 363054","mail":"DanielTargain@sekyee.co.uk","position":"HR Manager","permission":"3","leaves":"","note":"Admin Skype Name/Password=daniel.targain/d*****!23\r\npaypal=targain@gmail.com/u*u**_1**\r\n\r\nProfile name  SaveCancel\r\n\r\nCalling channels\t 1 channels \t\r\nOutgoing calls\t Manage Credit   Manage Auto-recharge\t\r\nMaking regular calls to the US?\r\nSet up US minute bundles\t\r\nCaller ID \t Set up Caller ID\t\r\nIncoming calls\t+442071936844 Click to edit\t\r\ntargain.floral.designs\tView account details\r\nRemove account\t\r\nAdd a number or business account\r\n\r\nYour Skype Connect SIP password\r\nSkype Number: +44 20 8123 1338\r\nHere's the password for \"Targain Floral Design\" -- your Skype Connect SIP profile.\r\nSIP User: 99051000239476\r\nSkype Connect address: sip.skype.com\r\nUDP Port: 5060\r\nPassword: QSbH3M5FS7eZrb\r\nSkype"},{"id":"Charles","password":"cp0115","name":"Charles Kim","tel":"07508 234991","mail":"CharlesKim@sekyee.co.uk","position":"Technical Director","permission":"3","leaves":"3/20","note":""},{"id":"Jonathan","password":"jonathan123","name":"Jonathan Sung","tel":"07508 409830","mail":"Jonathan@sekyee.co.uk","position":"Engineer","permission":"1","leaves":"13/18 (20)","note":"5/March/2013 (Half Dayoff)\r\n15/March/2013 (휴가)\r\n10/06~14/06/2013 (휴가)\r\n19/09~20/09/2013 (휴가)\r\n8/NOV/2013\r\n29/NOV/2013 (Half Dayoff)\r\n27,30,31/DEC/2013\r\n---------------------------------------------"},{"id":"Keen","password":"keen123","name":"Keen Han","tel":"07581 430377","mail":"Keen@sekyee.co.uk","position":"Engineer","permission":"0","leaves":"","note":""},{"id":"Peter","password":"peter123","name":"Peter Kim","tel":"07411 763309","mail":"Peter@sekyee.co.uk","position":"Engineer","permission":"0","leaves":"","note":""},{"id":"admin","password":"Passw0rd1","name":"Admin","tel":"02072 635090","mail":"admin@sekyee.co.uk","position":"Administrator","permission":"3","leaves":"","note":""},{"id":"minjong","password":"minjong123","name":"Minjong Choi","tel":"07972 107744","mail":"minjong@sekyee.co.uk","position":"Engineer","permission":"1","leaves":"22.5/25 (25)","note":"Fri 26 Jan 2018 13:00 – 14:00 Minjong Half day Off(gp)\t0.5\r\nFri 9 Feb 2018 All day Minjong DAY Off(gp)\t1\r\nFri 23 Mar 2018 13:00 – 14:00 Minjong Half day Off(gp)\t0.5\r\nWed 18 Apr 2018 13:00 – 14:00 Minjong Half day Off(visa)\t0.5\r\nThu 28 Jun 2018 09:00 – 10:00 minjong half day off\t0.5\r\nFri 10 Aug 2018 12:30 – 13:30 Minjong Choi Half day Off(수련회)\t0.5\r\nFri 19 Oct 2018 08:00 – 09:00 Half Day Off\t0.5\r\nFri 21 Sep 2018 12:00 – 13:00 Minjong Half day Off\t0.5\r\n25 May 2018 All day minjong dayoff\t1\r\nMon 2 Jul 2018 All day minjong dayoff\t1\r\n11 Jul 2018 All day minjong dayoff(병원)\t1\r\nWed 17 Oct 2018 All day Minjong off(parents) \t1\r\nMon 22 Oct 2018 All day Minjong off\t1\r\nWed 24 Oct 2018 All day Minjong off\t1\r\nThu 25 Oct 2018 All day Minjong off\t1\r\nMon 29 Oct 2018 All day Minjong off\t1\r\nTue 30 Oct 2018 All day Minjong off\t1\r\nWed 31 Oct 2018 All day Minjong off\t1\r\nThu 8 Nov 2018 All day Minjong off\t1\r\nFri 9 Nov 2018 All day Minjong off\t1\r\nMon 12 Nov 2018 All day Minjong off\t1\r\nMon 20 Aug 2018 All day minjong holiday\t1\r\nTue 21 Aug 2018 All day minjong holiday\t1\r\nWed 22 Aug 2018 All day minjong holiday\t1\r\nThu 23 Aug 2018 All day minjong holiday\t1\r\nFri 24 Aug 2018 All day minjong holiday\t1\r\n\t22.5\r\n"},{"id":"sunghwan","password":"sunghwan123","name":"Sunghwan","tel":"07462 037237, 07595 842824","mail":"ks1537@gmail.com","position":"Engineer","permission":"1","leaves":"","note":""},{"id":"hongjun","password":"hongjun!23","name":"Hongjun Choi","tel":"07702 514 674","mail":"hongjun@sekyee.co.uk","position":"Engineer","permission":"1","leaves":"27/25","note":"15/09/2014 registered\r\n\r\n2018 - 27 days"},{"id":"taehyung","password":"taehyung!23","name":"Taehyung Kim","tel":"07517 096661 (new)","mail":"taehyung@sekyee.co.uk","position":"1st line engineer","permission":"1","leaves":"","note":"04/december/2014 job started (13:00 - 18:00)\r\n\r\n17/dec/2014 - dayoff\r\n\r\novertime: dwse (2 hours), 19/dec/2014 (1 hour), 22-24/Dec: 9 Hours"},{"id":"jiyun","password":"jiyun!23","name":"Jiyun Park","tel":"07476 936 696","mail":"jiyun@sekyee.co.uk","position":"1st line engineer","permission":"1","leaves":"","note":"8/December/2014 job started (09:00-14:00 = 4 hours a day)\r\novertime: 2 hours (18/Dec/2014), 4hours (19/Dec/2014)\r\n\r\n제 계좌는\r\nJiyun Park\r\n80413267\r\n20-44-91에요\r\nthanks지연"},{"id":"astin.lee","password":"astin!23","name":"Hyu Lee","tel":"07852 614749","mail":"hyu@sekyee.co.uk","position":"Engineer","permission":"1","leaves":"","note":""},{"id":"maylee","password":"may!2345","name":"May (Sodam) Lee","tel":"074 8234 5466","mail":"maylee@sekyee.co.uk","position":"Assistance ICT Manag","permission":"1","leaves":"10","note":"21/5/2015 started 09:00-13:00"},{"id":"hyuntae","password":"hyuntae!23","name":"hyuntae","tel":"07492261109","mail":"hyuntae.choi@sekyee.co.uk","position":"1st, 2nd line engine","permission":"1","leaves":"21","note":""}]  
}

export default withAuthenticator(App, true);
