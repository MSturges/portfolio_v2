import axios from 'axios';

import { SET_CURRENT_TAB } from './types';

export function setCurrentTab(currentTab) {

  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}
