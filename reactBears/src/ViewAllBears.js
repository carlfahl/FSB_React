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
  render: function () {
    return (
      <div>
        <h1>List of the Bears</h1>
        {this.state.bears ? <BearsTable bears={this.state.bears} /> : null}
      </div>
    )
  }
});

export default ViewAllBears;
