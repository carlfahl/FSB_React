import React from 'react';

var BearsList = function (props) {
  var bearsList = props.bears.map(function(b){
    return <li> { b.name } </li>
  });
  return (
    <div>
      <ul>
        { bearsList }
      </ul>
    </div>
  );
}

export default BearsList;
