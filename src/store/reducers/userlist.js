// Userlist page reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

// set initial state
const initialState = {
  userlistPageData: null,
  error: null,
  loading: true,
  id: null
};

// update state
const fetchUserListData = (state, action) => {
  updateObject(state, { loading: true, id: action.id });
};

// fetchUserListPageData
const fetchUserListDataStart = (state, action) =>
  updateObject(state, { loading: true });

// fetchUserListPageDataSuccess
const fetchUserListDataSuccess = (state, action) => {
  logger.debug('from reducer - action', action);
  return updateObject(state, {
    userlistPageData: action.userlistPageData,
    loading: false
  });
};

// fetchUserListPageDataFailed
const fetchUserListDataFailed = (state, action) =>
  updateObject(state, { loading: false, error: action.error });

// fetchUserListPageDataReset
const fetchUserListDataReset = (state, action) =>
  updateObject(initialState, { loading: true });

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USRLIST_DATA_START:
      return fetchUserListDataStart(state, action);
    case actionTypes.FETCH_USRLIST_DATA_SUCCESS:
      return fetchUserListDataSuccess(state, action);
    case actionTypes.FETCH_USRLIST_DATA_FAILED:
      return fetchUserListDataFailed(state, action);
    case actionTypes.FETCH_USRLIST_DATA_RESET:
      return fetchUserListDataReset(state, action);
    default:
      return state;
  }
};

export default reducer;
