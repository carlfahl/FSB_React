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
import ViewAllBearsData from './ViewAllBearsData';
import PostBearsData from './PostBearsData';

var BearsApp = React.createClass({
  getInitialState: function () {
    return {
      activeComponent: 'home'
    };
  },
  updateActiveComp: function(whichComp) {
    return this.setState({ activeComponent: whichComp })
  },
  renderProperComponent: function() {
    if(this.state.activeComponent === 'home'){
      return <Home updateActiveComp={this.updateActiveComp} />
    } else if (this.state.activeComponent === 'viewAll') {
      return <ViewAllBearsData />
    }  else if (this.state.activeComponent === 'postNew') {
        return <PostBearsData />
    } else {
      return null
    }
  },
  render: function () {
    return (
      <div>
        { this.renderProperComponent() }
      </div>
    );
  }
});

export default BearsApp;
