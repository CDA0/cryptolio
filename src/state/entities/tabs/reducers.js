import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { SET_SELECTED_TAB } from './actions';

const selectedTab = handleActions(
  {
    [SET_SELECTED_TAB]: (action, payload) => payload,
  },
  'Home'
);

export { selectedTab };

export default combineReducers({
  selectedTab,
});
