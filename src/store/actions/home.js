//home action dispatchers
import * as actionTypes from './actionTypes';
import logger from '../../shared/logger/logger';

export const fetchHomeData = () => {
  return {
    type: actionTypes.FETCH_HOME_DATA
  };
}

export const fetchHomeDataStart = () => {
  return {
    type: actionTypes.FETCH_HOME_DATA_START
  };
}

export const fetchHomeDataSuccess = homePageData => {
  logger.debug('action', homePageData); //TODO: remove console.log
  return {
    type: actionTypes.FETCH_HOME_DATA_SUCCESS,
    homePageData: homePageData
  };
}

export const fetchHomeDataFailed = error => {
  return {
    type: actionTypes.FETCH_HOME_DATA_FAILED,
    error: error
  }
}
