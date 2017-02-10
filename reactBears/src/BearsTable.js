import React from 'react';
import {Table, Button} from 'react-bootstrap';

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
              <Button bsStyle="primary" onClick={(id) => props.deleteHandler(item._id)}>Delete</Button>
              <Button bsStyle="primary" onClick={(id) => props.updateHandler(item._id)}>Update</Button>
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
