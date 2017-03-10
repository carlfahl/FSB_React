import React from 'react'
import $ from 'jquery';
import EditBearForm from './EditBearForm';

var EditBearContainer = React.createClass({
  getInitialState: function () {
    return (
      {
        name: null,
        species: null,
        age: null,
        location: null,
        attitude: null,
        weight: null
      }
    );
  },
  componentWillMount: function () {
    this.getBearFromServer();
  },
  getBearFromServer: function () {
    var self = this;
    $.ajax({
      url: '/api/bears/' + this.props.bear,
      method: 'GET'
    }).done(function (data) {
      self.setState(data);
    });
  },
  onChangeHandler: function (field, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    var self = this;
    $.ajax({
      url: '/api/bears/' + this.props.bear,
      method: 'PUT',
      data: this.state
    }).done(function (data) {
      console.log(data);
      self.props.setActiveComp('activeComp', 'viewAll');
    });
  },
  render () {
    return (
      <div>
        <EditBearForm bear={this.state} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
      </div>
    )
  }
})

export default EditBearContainer;
