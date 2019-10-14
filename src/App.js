import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';

import AddToDo from './containers/react-add-todo';
import ToDoListContainer from './containers/react-todos-list';
import Callback from './containers/auth0-callback';
import NavigationContainer from './containers/react-navigation-container';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'fb95d982-0d51-42af-9bc1-beeb99aabb6d'
    /* ...Other Configuration Options... */
  }
});
appInsights.loadAppInsights();
// appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>To Do List</h1>
          {/* <AddToDo />
            <ToDoListContainer /> */}
          {/* <Navigation /> */}
          {/* <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} /> */}
          <NavigationContainer />
          <Route exact path="/" component={ToDoListContainer} />
          <Route exact path="/new-item" component={AddToDo} />
          <Route exact path="/callback" component={Callback} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
