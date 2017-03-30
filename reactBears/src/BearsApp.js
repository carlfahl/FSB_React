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
  Components: {
    'home': Home,
    'viewAll': ViewBearsContainer,
    'postNew': PostBearContainer,
    'edit': EditBearContainer
  },
  render: function () {
    var ProperComp = this.Components[this.state.activeComp];
    return (
      <div>
        <ProperComp bear={this.state.activeID} setActiveComp={this.setActiveComp} />
      </div>
    )
  }
});

export default BearsApp;
