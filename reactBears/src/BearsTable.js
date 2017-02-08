import React from 'react';
import {Table, Button} from 'react-bootstrap';

function ActionBtn(props) {
  return (
    <Button bsStyle="primary" onClick={props.onClick()}>{props.text}</Button>
  );
}

function BearsTable (props) {
  console.log(props.bears);
  var bears = props.bears.map(function (item) {
    return ( <tr>
              <td>{item.name}</td>
              <td>{item.species}</td>
              <td>{item.age}</td>
              <td>{item.weight}</td>
              <td>{item.location}</td>
              <td>{item.attitude}</td>
              {/* Passing the functions by props to the buttons themselves */}
              <td><ActionBtn text="Delete" onClick={props.deleteHandler(item._id)} /></td>
              <td><ActionBtn text="Update" onClick={props.updateHandler(item._id)} /></td>
            </tr>
          );
  });

  return (
    <div>
      <h1>This is going to be the Bears Table</h1>
      <Table hover>
          <thead>
            <th><strong>Name</strong></th>
            <th><strong>Species</strong></th>
            <th><strong>Age</strong></th>
            <th><strong>Weight</strong></th>
            <th><strong>Location</strong></th>
            <th><strong>Attitude</strong></th>
            <th><strong>Action</strong></th>
          </thead>
          <tbody>
            {bears}
          </tbody>
        </Table>
      </div>
  );
}

export default BearsTable;
