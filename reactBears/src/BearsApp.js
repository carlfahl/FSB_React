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
import UpdateBearData from './UpdateBearData';

//var UpdateContainer = React.createClass({

//});

var BearsApp = React.createClass({
  getInitialState: function () {
    return {activeComponent: "Home",
            updatingBear: null};
  },
  updateActiveComponent: function (whichIsActive) {
    this.setState({activeComponent: whichIsActive});
  },
  updateBear: function (bearId) {
    var data = this.state;
    data.updatingBear = bearId;
    this.setState(data);
  },
  renderProperComponent: function () {
    if (this.state.activeComponent === "Home") {
      return (<Home updateActiveComp={this.updateActiveComponent} />);
    } else if (this.state.activeComponent === "viewAll") {
      return (<ViewAllBears updateActiveComp={this.updateActiveComponent}
                updateBear={this.updateBear} />);
    } else if (this.state.activeComponent === "postNew") {
      console.log('rendering PostBearsData');
      return (<PostBearsData />);
    } else if (this.state.activeComponent === "updateBear") {
      return <UpdateBearData bearId={this.state.updatingBear}
              updateActiveComp={this.updateActiveComponent}/>
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <div>
        { /*Insert the output of the renderProperComponent here */}
        {this.renderProperComponent()}
      </div>
    );
  }
});

export default BearsApp;
