import './jquery.dataTables.css';
import React, { Component } from 'react';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export class Tbl extends Component {
  componentDidMount() {
    console.log(this.el);
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        { title: "id", data: "id" },
        { title: "password", data: "password" },
        { title: "name", data: "name" },
        { title: "tel", data: "tel" },
        { title: "mail", data: "mail" },
        { title: "postion", data: "position" },
        { title: "permission", data: "permission" },
        { title: "leaves", data: "leaves" },
        { title: "note", data: "note" }
      ]})    
  }
  componentWillUnmount() {
  }
  render() {
    return <div>
      <table className="display" width="100%" ref={el => this.el = el}>
      </table>
    </div>
  }
}
