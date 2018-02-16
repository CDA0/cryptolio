import { createAction } from 'redux-actions';

export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

const setSelectedTab = createAction(SET_SELECTED_TAB);

export { setSelectedTab };
