import React from 'react';
import BearsList from './BearsList';
var $ = require('jquery');

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
    $.ajax('/api/bears').done(function (data) {
      that.setState(bears: data);
    });
    this.setState({ bears: [{name: "bob"}, {name: "joe"}] })

  },

  render: function () {
    return (
      <div>
        <h3> Viewing All Bears </h3>
        { this.state.bears ? <BearsList bears={this.state.bears} /> : null }
      </div>
    );
  }
});

export default ViewAllBearsData;
