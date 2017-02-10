import React from 'react';
import BearsTable from './BearsTable';
import $ from 'jquery';

var ViewAllBears = React.createClass({
  getInitialState: function () {
    return (
      {bears: null}
    );
  },
  componentWillMount: function functionName() {
    this.getBearsFromServer();
  },
  getBearsFromServer: function () {
    var that = this;
    $.ajax({
      url: '/api/bears',
      method: 'GET'
    }).done(function (data) {
      that.setState({bears: data});
    });
  },
  deleteABear: function (id) {
    $.ajax({
      url: '/api/bears/'+id,
      method: 'DELETE'
    }).done(function () {
      console.log('DELETED Bear with id: '+id);
    });

    var newData = this.state.bears.filter(function (item) {
      return item._id !== id;
    });

    this.setState({bears: newData});
  },
  updateABear: function (id) {
    console.log("Updating Bear with id: " + id);
  },
  render: function () {
    return (
      <div>
        <h1>List of the Bears</h1>
        {this.state.bears ? <BearsTable bears={this.state.bears} deleteHandler={this.deleteABear} updateHandler={this.updateABear} /> : null}
      </div>
    )
  }
});

export default ViewAllBears;
