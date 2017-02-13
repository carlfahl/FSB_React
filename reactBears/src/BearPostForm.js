import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

function BearPostForm (props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Name" onChange={ (event) => props.onChangeHandler('name', event.target.value)} />
          <ControlLabel>Age</ControlLabel>
          <FormControl type="text" placeholder="Age" onChange={ (event) => props.onChangeHandler('age', event.target.value)} />
          <ControlLabel>Weight</ControlLabel>
          <FormControl type="text" placeholder="Weight" onChange={ (event) => props.onChangeHandler('weight', event.target.value)} />
          <ControlLabel>Species</ControlLabel>
          <FormControl type="text" placeholder="Species" onChange={ (event) => props.onChangeHandler('species', event.target.value)}/>
          <ControlLabel>Location</ControlLabel>
          <FormControl type="text" placeholder="Location" onChange={ (event) => props.onChangeHandler('location', event.target.value)}/>
          <ControlLabel>Attitude</ControlLabel>
          <FormControl type="text" placeholder="Attitude" onChange={ (event) => props.onChangeHandler('attitude', event.target.value)}/>
        </FormGroup>
      </Form>
      <Button bsStyle="primary" onClick={() => props.onSubmit()}>Add New Bear</Button>
    </div>
  );
}

export default BearPostForm;
