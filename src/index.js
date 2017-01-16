import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import './sass/style.scss';
import { white } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: 'white'
  }
});


injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes} />
  </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
