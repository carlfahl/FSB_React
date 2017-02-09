import React from 'react';
import BearPostForm from './BearPostForm';

var ViewAllBearsData = React.createClass({
  getInitialState: function () {
    return {
      bearName: null,
      bearColor: null
    };
  },
  updateBearName: function(name) {
    this.setState({ bearName: name })
  },
  handleSubmit: function() {
    // ajax to post bears
    // data is this.state.bearName
  },

  render: function () {
    return (
      <div>
         <BearPostForm handleSubmit={this.handleSubmit} updateBearName={this.updateBearName} />
      </div>
    );
  }
});

export default ViewAllBearsData;
