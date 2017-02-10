import React from 'react';

var Home = function (props) {
  return (
    <div>
      <h1>Welcome to the bears app!</h1>
      <button onClick={ () => props.updateActiveComp('viewAll')  }>View All Bears</button>
      <button onClick={ () => props.updateActiveComp('postNew')  }>Post New Bear</button>
    </div>
  );
}

export default Home;
