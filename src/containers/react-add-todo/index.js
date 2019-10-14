import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'fb95d982-0d51-42af-9bc1-beeb99aabb6d'
    /* ...Other Configuration Options... */
  }
});

appInsights.loadAppInsights();

let AddToDo = ({ dispatch }) => {
  let input;
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addToDo(input.value));
        input.value = '';
      }}
    >
      {appInsights.trackPageView({ name: 'Inside AddToDo component test' })}
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddToDo = connect()(AddToDo);

export default AddToDo;
