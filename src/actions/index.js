import axios from 'axios';

const SET_CURRENT_TAB = 'SET_CURRENT_TAB'
const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV'
const TOGGLE_TABS = 'TOGGLE_TABS'
const SEND_EMAIL = 'SEND_EMAIL'


export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}

export function toggleSideNav(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}

export function toggleTabs(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}
