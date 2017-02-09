import React from 'react';
import BearsList from './BearsList';
import BearsTable from './BearsTable';
import $ from 'jquery';

var ViewAllBearsData = React.createClass({
  getInitialState: function () {
    return {
      bears: null
    };
  },
  componentWillMount: function() {
    this.loadBearsFromServer();
  },
  loadBearsFromServer: function() {
    var that = this;
    $.ajax({
        url: '/api/bears',
        method: 'GET'
      }).done(function (data) {
      console.log('Getting Bears Data');
      console.log(data);
      that.setState({bears: data});
      console.log(that.state);
    });
    console.log("line after AJAX.");
    // this.setState({ bears: [{name: "bob"}, {name: "joe"}] })
  },

  deleteHandler: function (id) {
    console.log("This function will delete the bear with id: "+id);
    $.ajax({
      url: '/api/bears/'+id,
      method: 'DELETE'
    }).done(function () {
      console.log('Deleted the Bear');
    });
    var newBears = this.state.bears.filter(function (item) {
      return item._id !== id;
    });
    this.setState({bears: newBears});
  },

  updateHandler: function (id) {
    console.log("This function will update the bear with id: "+id);
    //AJAX call to Delete a bear.
  },

  render: function () {
    return (
      <div>
        <h3> Viewing All Bears </h3>
        { this.state.bears ? <BearsList bears={this.state.bears} /> : null }
        { this.state.bears ? <BearsTable bears={this.state.bears} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/> : null }
      </div>
    );
  }
});

export default ViewAllBearsData;
