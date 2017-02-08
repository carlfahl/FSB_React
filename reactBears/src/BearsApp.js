import React from 'react';
import './BearsApp.css';
import BearsTable from './BearsTable';

var BearsApp = React.createClass({
  getInitialState: function () {
    return (
      // Will get Bears form the API with AJAX here.
    );
  },
  getBears: function () {
    // Will GET to the API to list Bears.
  },
  addABear: function () {
    // Will POST to the API to add a Bear.
  },
  updateABear: function () {
    // Will PUT to the API to update a Bear.
  },
  deleteABear: function () {
    // Will DELETE to the API to delete a Bear.
  },
  render: function () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
});

export default BearsApp;
