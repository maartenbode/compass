import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('root'));
