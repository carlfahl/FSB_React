var React = require('react');

var Home = function(props){
  return (
    <div>
      <h1>Welcome to the bears app!</h1>
      <button onClick={ props.updateActiveComp.bind(null, 'viewAll')  }>View All Bears</button>
      <button onClick={ props.updateActiveComp.bind(null, 'postNew')  }>Post New Bear</button>
    </div>
  )
}

export default Home;
