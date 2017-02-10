// - Bears App (decides which component to render)
//  - ViewAllBearsData (Gets bears from server and passes them down)
//    - BearsList (Renders bears into list items)
//  - PostBearsData (holds state for bears form, submits bear to server)
//    - BearPostForm (just a simple form)
//  - EditBearsData (gets the bear from server, holds form state, posts bear to server)
//    - BearEditForm (just a simple form)


import React from 'react';
import './BearsApp.css';
import Home from './Home';
import ViewAllBears from './ViewAllBears';
import PostBearsData from './PostBearsData';

//var UpdateContainer = React.createClass({

//});

var BearsApp = React.createClass({
  getInitialState: function () {
    return {activeComponent: "Home"};
  },
  updateActiveComponent: function (whichIsActive) {
    this.setState({activeComponent: whichIsActive});
  },
  renderProperComponent: function () {
    if (this.state.activeComponent === "Home") {
      return (<Home updateActiveComp={this.updateActiveComponent} />);
    } else if (this.state.activeComponent === "viewAll") {
      return (<ViewAllBears />);
    } else if (this.state.activeComponent === "postNew") {
      console.log('rendering PostBearsData');
      return (<PostBearsData />);
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <div>
        {this.renderProperComponent()}
      </div>
    );
  }
});

export default BearsApp;
