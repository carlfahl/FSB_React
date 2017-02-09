// - Bears App (decides which component to render)
//  - ViewAllBearsData (Gets bears from server and passes them down)
//    - BearsList (Renders bears into list items)
//  - PostBearsData (holds state for bears form, submits bear to server)
//    - BearPostForm (just a simple form)
//  - EditBearsData (gets the bear from server, holds form state, posts bear to server)
//    - BearEditForm (just a simple form)


import React from 'react';
import './BearsApp.css';
import BearsTable from './BearsTable';
import BearPostForm from './BearPostForm';

//var UpdateContainer = React.createClass({

//});

var BearsApp = React.createClass({
  getInitialState: function () {
    var bears = [{name: 'Yogi', species:'Black', age: 20, weight: 400, location: 'bozeman', attitude: 'average', _id: 5}];
    return {bears: bears, showUpdate: false};
  },
  getBears: function () {
    // AJax GET to API to get list of bears.
  },
  addABear: function () {
    // AJax POST to add a Bear.
  },
  updateABear: function () {
    // PUT to API to update a bear.
  },
  deleteABear: function () {
    // DELETE to API to delete a bear.
  },
  // These two functions are the simple test handlers.  Before adding paramter, they worked, but that is not useful
  deleteHandler: function (i) {
    console.log('Clicked the ' + i + ' Delete Button');
  },
  updateHandler: function (i) {
    console.log('Clicked the ' + i + ' Update Button');
  },
  submitHandler: function () {
    console.log("Subitted the form");
  },
  render: function () {
    return (
      <div>
        {/* The next line is where I send the handler functions.  This was done with arrow functions in the Facebook tutorial*/}
        <BearsTable bears={this.state.bears} deleteHandler={function (i) {this.deleteHandler(i)}} updateHandler={function (i) {this.updateHandler(i)}} />
        <BearPostForm onSubmit={this.submitHandler} />
      </div>
    );
  }
});

export default BearsApp;
