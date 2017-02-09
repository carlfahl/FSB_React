import React from 'react';
import BearPostForm from './BearPostForm';
import $ from 'jquery';

var PostBearsData = React.createClass({
  getInitialState: function () {
    return ({
      bearName: null,
      bearSpecies: null,
      bearAge: null,
      bearLocation: null,
      bearAttitude: null,
      bearWeight: null
    });
  },
  updateBearName: function (name) {
    var data = this.state;
    data.bearName = name;
    this.setState(data);
  },
  updateBearAge: function (age) {
    var data = this.state;
    data.bearAge = age;
    this.setState(data);
  },
  updateBear: function (weight) {
    var data = this.state;
    data.bearWeight = weight;
    this.setState(data);
  },
  postNewBear: function () {
    $.ajax({
      url: '/api/bears',
      method: 'POST',
      data: this.state
    }).done(function (data) {
      console.log('Added a Bear', data);
    })
  },
  render: function () {
    return (
      <div>
        <BearPostForm updateBearName={this.updateBearName}
                    updateBearAge={this.updateBearAge}
                    updateBearWeight={this.updateBearWeight}
                    onSubmit={this.postNew} />
      </div>
    );
  }
});

export default PostBearsData;
