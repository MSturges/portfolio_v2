import { combineReducers } from 'redux';
import PortfoilioReducer from './reducer_portfolio';

const rootReducer = combineReducers({
  portfolio: PortfoilioReducer
});

export default rootReducer;
