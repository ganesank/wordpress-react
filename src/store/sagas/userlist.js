// Userlist page sagas
import { put } from 'redux-saga/effects';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';

axios.defaults.timeout = 10000;
// fetchUserlistDataSaga

export function* fetchUserListDataSaga(action, paramId) {
  yield put(actions.fetchUserListDataStart());
  const fetchUserListDataApiLink = `${apiConfig().FETCH_USERLIST_PAGE_DATA.url}`;

  try {
    const fetchUserListDataApi = apiConfig().FETCH_USERLIST_PAGE_DATA.url;
    const response = yield axios.get(
      fetchUserListDataApiLink,
      fetchUserListDataApi.headers
    );
    yield put(actions.fetchUserListDataSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchUserListDataFailed(error));
  }
}
