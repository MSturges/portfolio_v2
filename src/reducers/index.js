import { combineReducers } from 'redux';
import PortfoilioReducer from './reducer_portfolio';

const rootReducer = combineReducers({
  material_ui: PortfoilioReducer,
});

export default rootReducer;
