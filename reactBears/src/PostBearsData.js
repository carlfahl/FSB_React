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
  onChangeHandler: function (field, value) {
    var newData = {};
    // {name: newName}
    newData[field] = value;
    this.setState(newData);
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
        <BearPostForm onChangeHandler={this.onChangeHandler}
                    onSubmit={this.postNewBear} />
      </div>
    );
  }
});

export default PostBearsData;
