import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchHomeDataSaga } from './home';
import { fetchPostTypeListDataSaga } from './posttypelist';
import { fetchPostListDataSaga } from './postlist';
import { fetchUserListDataSaga } from './userlist';
import { fetchPostDetailSaga } from './postdetail';
import { fetchPageDetailSaga } from './pagedetail';

//watcher for homepage
export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME_DATA, fetchHomeDataSaga);
}


// watcher for Post List
export function* watchPostTypeList() {
  yield takeEvery(actionTypes.FETCH_POSTTYPELIST_DATA, fetchPostTypeListDataSaga);
}
export function* watchPostList() {
  yield takeEvery(actionTypes.FETCH_POSTLIST_DATA, fetchPostListDataSaga);
}

// watcher for Productdetails
export function* watchPostdetails() {
  yield takeEvery(actionTypes.FETCH_POST_DETAIL, fetchPostDetailSaga);
}

export function* watchPagedetails() {
  yield takeEvery(actionTypes.FETCH_PAGE_DETAIL, fetchPageDetailSaga);
}

// watcher for User List
export function* watchUserList() {
  yield takeEvery(actionTypes.FETCH_USRLIST_DATA, fetchUserListDataSaga);
}