// Container component - renders the correct view based on UI.

import React from 'react';
import Home from './Home';
import ViewBearsContainer from './ViewBearsContainer';
import PostBearContainer from './PostBearContainer';
import EditBearContainer from './EditBearContainer';

var BearsApp = React.createClass({
  // Set up the UI state
  getInitialState: function () {
    return (
      {
        activeComp: 'home',
        activeID: null
      }
    )
  },
  // Change the state variables
  setActiveComp: function (field, val) {
    var newData = {};
    newData[field] = val;
    this.setState(newData);
  },
  // Change the viewed component based on the state.
  renderProperComp: function () {
    if (this.state.activeComp === 'home') {
      return (<Home setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'viewAll') {
      return (<ViewBearsContainer setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'postNew') {
      return (<PostBearContainer setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'edit') {
      return (<EditBearContainer bear={this.state.activeID} setActiveComp={this.setActiveComp} />);
    }
  },
  render: function () {
    return (
      <div>
        {this.renderProperComp()}
      </div>
    )
  }
});

export default BearsApp;
