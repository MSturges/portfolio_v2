import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import PortfoilioReducer from './reducer_portfolio';
import ProjectReducer from './reducer_project';


const rootReducer = combineReducers({
  form,
  material_ui: PortfoilioReducer,
  project: ProjectReducer
});

export default rootReducer;
