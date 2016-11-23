import axios from 'axios';

import { SET_CURRENT_TAB, CURRENT_PROJECT } from './types';

export function setCurrentTab(currentTab) {

  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}

export function setCurrentProject(selectedProject) {

  return {
    type: CURRENT_PROJECT,
    payload: selectedProject
  }
}
