import { SET_CURRENT_TAB } from '../actions/types';

const initialState = {
  showTabs: false,
  showSideNav: false,
  currentTab: 0
}

export default function(state = initialState, action) {
  switch (action.type) {

    case SET_CURRENT_TAB:
    return { ...state, currentTab: action.payload }
    break

    default:
    return state;
  }
}
