import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <Router history={browserHistory}>{routes}</Router>
      </Provider>
    );
  }
}


