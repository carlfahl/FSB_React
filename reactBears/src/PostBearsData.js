import React from 'react';
import BearPostForm from './BearPostForm';
import $ from 'jquery';

var PostBearsData = React.createClass({
  getInitialState: function () {
    return ({
      name: null,
      species: null,
      age: null,
      location: null,
      attitude: null,
      weight: null
    });
  },
  updateBearName: function (name) {
    var data = this.state;
    data.name = name;
    this.setState(data);
    console.log(this.state);
  },
  updateBearAge: function (age) {
    var data = this.state;
    data.age = age;
    this.setState(data);
    console.log(this.state);
  },
  updateBearWeight: function (weight) {
    var data = this.state;
    data.weight = weight;
    this.setState(data);
    console.log(this.state);
  },
  updateBearSpecies: function (species) {
    var data = this.state;
    data.species = species;
    this.setState(data);
    console.log(this.state);
  },
  updateBearLocation: function (location) {
    var data = this.state;
    data.location = location;
    this.setState(data);
    console.log(this.state);
  },
  updateBearAttitude: function (attidude) {
    var data = this.state;
    data.attitude = attidude;
    this.setState(data);
    console.log(this.state);
  },
  postNewBear: function () {
    var that = this;
    $.ajax({
      url: '/api/bears',
      method: 'POST',
      data: this.state
    }).done(function (data) {
      console.log('Added a Bear', data);
      that.props.updateActiveComp("viewAll");
    });
  },
  render: function () {
    return (
      <div>
        <h1>New Bear Form</h1>
        <BearPostForm updateBearName={this.updateBearName}
                    updateBearAge={this.updateBearAge}
                    updateBearWeight={this.updateBearWeight}
                    updateBearSpecies={this.updateBearSpecies}
                    updateBearLocation={this.updateBearLocation}
                    updateBearAttitude={this.updateBearAttitude}
                    onSubmit={this.postNewBear} />
      </div>
    );
  }
});

export default PostBearsData;
