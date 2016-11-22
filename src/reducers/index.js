import { combineReducers } from 'redux';
import PortfoilioReducer from './reducer_portfolio';
import { reducer as form} from 'redux-form';


const rootReducer = combineReducers({
  form,
  material_ui: PortfoilioReducer
});

export default rootReducer;
