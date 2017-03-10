import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

var EditBearForm = function (props) {
  return (
    <div>
      <Form>
        <FormControl type="text" placeholder="name" value={props.bear.name} onChange={(event) => props.onChangeHandler('name', event.target.value)} />
        <FormControl type="text" placeholder="species" value={props.bear.species} onChange={(event) => props.onChangeHandler('species', event.target.value)} />
        <FormControl type="text" placeholder="age" value={props.bear.age} onChange={(event) => props.onChangeHandler('age', event.target.value)} />
        <FormControl type="text" placeholder="weight" value={props.bear.weight} onChange={(event) => props.onChangeHandler('weight', event.target.value)} />
        <FormControl type="text" placeholder="location" value={props.bear.location} onChange={(event) => props.onChangeHandler('location', event.target.value)} />
        <FormControl type="text" placeholder="attitude" value={props.bear.attitude} onChange={(event) => props.onChangeHandler('attitude', event.target.value)} />
      </Form>
      <Button bsStyle="success" onClick={() => props.onSubmitHandler()}>Edit Bear</Button>
    </div>
  );
}

export default EditBearForm;
