import React from 'react';
import './BearsApp.css';
import BearsTable from './BearsTable';
import BearPostForm from './BearPostForm';

var BearsApp = React.createClass({
  getInitialState: function () {
    var bears = [{name: 'Yogi', species:'Black', age: 20, weight: 400, location: 'bozeman', attitude: 'average'}];
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
  deleteHandler: function () {
    console.log('Clicked the Delete Button');
  },
  updateHandler: function () {
    console.log('Clicked the Update Button');
  },
  render: function () {
    return (
      <div>
        <BearsTable bears={this.state.bears} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/>
        <BearPostForm />
      </div>
    );
  }
});

export default BearsApp;
