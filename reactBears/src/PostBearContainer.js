import React from 'react';
import PostBearForm from './PostBearForm';
import $ from 'jquery';

var PostBearContainer = React.createClass({
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
  onChangeHandler: function (field, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    var self = this;
    $.ajax({
      url: '/api/bears',
      method: 'POST',
      data: this.state
    }).done(function (data) {
      console.log(data);
      self.props.setActiveComp('activeComp', 'viewAll');
    });
  },
  render () {
    return (
      <div>
        <PostBearForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
      </div>
    );
  }
});

export default PostBearContainer;
