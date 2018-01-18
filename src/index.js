import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store';
import './atomic/index.scss';

let store = configureStore();

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
