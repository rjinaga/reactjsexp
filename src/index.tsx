import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app2';
import axiosGlobalConfig from './config/axios-config';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// Redux Store
import thunk from 'redux-thunk';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// CSS
import './css/bootstrap.min.css';
import './css/app.scss';

const appStore = createStore(rootReducer, applyMiddleware(thunk));

axiosGlobalConfig();

ReactDOM.render(
  <Provider store={appStore}>
    {/*BrowserRouter: Uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL */}
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
