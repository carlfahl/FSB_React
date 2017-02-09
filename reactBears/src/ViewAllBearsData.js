import React from 'react';
import BearsList from './BearsList';

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
    // do an ajax call, call set state with data you get back
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
