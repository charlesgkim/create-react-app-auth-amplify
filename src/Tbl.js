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
      { "data": "id" },
      { "data": "password" },
      { "data": "name" },
      { "data": "tel" },
      { "data": "mail" },
      { "data": "position" },
      { "data": "permission" },
      { "data": "leaves" },
      { "data": "note" }
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
