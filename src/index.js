import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import toDoApp from './reducers';
import rootSaga from './sagas';
import { loadToDoList } from './actions';
import './index.css';
import App from './App';

// const monitor = window["__SAGA_MONITOR_EXTENSION__"];
//{ sagaMonitor: monitor }
const sagaMiddleware = createSagaMiddleware();
const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch(loadToDoList());
// const store = createStore(toDoApp);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
