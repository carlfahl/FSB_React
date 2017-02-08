import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function BearPostForm (props) {
  return (
    <div>
      <Form onSubmit={props.onSubmit()} >
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Name" />
          <ControlLabel>Age</ControlLabel>
          <FormControl type="text" placeholder="Age" />
          <ControlLabel>Weight</ControlLabel>
          <FormControl type="text" placeholder="Weight" />
          <ControlLabel>Species</ControlLabel>
          <FormControl type="text" placeholder="Species" />
          <ControlLabel>Location</ControlLabel>
          <FormControl type="text" placeholder="Location" />
          <ControlLabel>Attitude</ControlLabel>
          <FormControl type="text" placeholder="Attitude" />
        </FormGroup>
      </Form>
    </div>
  );
}

export default BearPostForm;
