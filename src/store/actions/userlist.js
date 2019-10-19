// User list action dispatchers
import * as actionTypes from './actionTypes';
import logger from '../../shared/logger/logger';

export const fetchUserListData = () => ({
  type: actionTypes.FETCH_USRLIST_DATA,
});

export const fetchUserListDataStart = () => ({
  type: actionTypes.FETCH_USRLIST_DATA_START
});

export const fetchUserListDataSuccess = userlistPageData => {
  logger.debug('action', userlistPageData);
  return {
    type: actionTypes.FETCH_USRLIST_DATA_SUCCESS,
    userlistPageData
  };
};

export const fetchUserListDataFailed = error => ({
  type: actionTypes.FETCH_USRLIST_DATA_FAILED,
  error
});

export const fetchUserListDataReset = () => ({
  type: actionTypes.FETCH_USRLIST_DATA_RESET
});
