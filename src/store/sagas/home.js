//home page sagas
import { put } from 'redux-saga/effects';

import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

//fetchHomeDataSaga
export function* fetchHomeDataSaga(action){
  yield put(actions.fetchHomeDataStart());
  try{
    const fetchHomeDataApi = apiConfig().FETCH_HOME_PAGE_DATA;
    yield logger.debug('fetchHomeDataSaga - api url', fetchHomeDataApi.url); 
    yield logger.debug('fetchHomeDataSaga - headers', fetchHomeDataApi.headers); 
    const response = yield axios.get(fetchHomeDataApi.url, fetchHomeDataApi.headers);    
    yield put(actions.fetchHomeDataSuccess(response.data));
  }catch(error){
    yield put(actions.fetchHomeDataFailed(error));
  }
}

