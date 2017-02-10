import React from 'react';
import BearUpdateForm from './BearUpdateForm';
import $ from 'jquery';

var UpdateBearData = React.createClass({
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
  componentWillMount: function () {
    this.getBearFromServer();
  },
  getBearFromServer: function () {
    var that = this;
    $.ajax({
      url: '/api/bears/'+this.props.bearId,
      method: 'GET'
    }).done(function (data) {
      console.log('Got Bear', data);
      that.setState(data);
      console.log(that.state);
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
    data.bear.age = age;
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
  updateBearAttitude: function (attitude) {
    var data = this.state;
    data.attitude = attitude;
    this.setState(data);
    console.log(this.state);
  },
  updateBear: function () {
    var that = this;
    $.ajax({
      url: '/api/bears/' + this.props.bearId,
      method: 'PUT',
      data: this.state
    }).done(function (data) {
      console.log('Updated a Bear', data);
      that.props.updateActiveComp("viewAll");
    });
  },
  render: function () {
    return (
      <div>
        <BearUpdateForm bearName={this.state.name}
                    bearAge={this.state.age}
                    bearWeight={this.state.weight}
                    bearSpecies={this.state.species}
                    bearLocation={this.state.location}
                    bearAttitude={this.state.attitude}
                    updateBearName={this.updateBearName}
                    updateBearAge={this.updateBearAge}
                    updateBearWeight={this.updateBearWeight}
                    updateBearSpecies={this.updateBearSpecies}
                    updateBearLocation={this.updateBearLocation}
                    updateBearAttitude={this.updateBearAttitude}
                    onSubmit={this.updateBear} />
      </div>
    );
  }
});

export default UpdateBearData;
