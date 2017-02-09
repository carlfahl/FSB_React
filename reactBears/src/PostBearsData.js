import React from 'react';
import BearPostForm from './BearPostForm';
var $ = require('jquery');

var PostBearsData = React.createClass({
  getInitialState: function () {
    return {
      bearName: null,
      bearSpecies: null,
      bearAge: null,
      bearLocation: null,
      bearAttitude: null,
      bearWeight: null
    };
  },
  updateBearData: function(data) {

    this.setState({ bearName: name })
  },
  handleSubmit: function(bearData) {
    $.ajax({
      url: '/api/bears',
      method: 'POST',
      data: bearData
    }).done(function (bearData) {
      console.log('Added a Bear!!');
    });
  },

  render: function () {
    return (
      <div>
         <BearPostForm handleSubmit={this.handleSubmit} updateBearName={this.updateBearName} />
      </div>
    );
  }
});

export default PostBearsData;
