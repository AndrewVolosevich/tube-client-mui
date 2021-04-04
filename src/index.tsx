import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {CssBaseline} from '@material-ui/core';

ReactDOM.render(
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>,
  document.getElementById('root')
);
