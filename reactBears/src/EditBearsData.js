//this is simplified to work for a bear with only the name

import React from 'react';
import BearEditForm from './BearEditForm';

var ViewAllBearsData = React.createClass({
  getInitialState: function () {
    return {
      bearName: null
    };
  },
  componentWillMount: function() {
    this.loadBearsFromServer()
  },
  loadBearsFromServer: function(id) {
    // AJAX to get bear by id
    // this.setState({ bearName: data.name  })
  }
  updateBearName: function(name) {
    this.setState({ bearName: name })
  },

  handleSubmit: function() {
    // ajax to post bears
  },

  render: function () {
    return (
      <div>
         <BearEditForm updateBearName={this.updateBearName} name={this.state.name} />
      </div>
    );
  }
});

export default ViewAllBearsData;
