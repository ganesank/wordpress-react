import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import postlistReducer from "./store/reducers/postlist";
import posttypelistReducer from "./store/reducers/posttypelist";
import postdetailReducer from "./store/reducers/postdetail";
import userlistReducer from "./store/reducers/userlist";
import pagedetailReducer from "./store/reducers/pagedetail";

import {
  watchPostList,
  watchPostTypeList,
  watchPostdetails,
  watchPagedetails,
  watchUserList
} from "./store/sagas";

//register redux dev tools when in development mode.
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  postlist: postlistReducer,
  posttypelist: posttypelistReducer,
  postdetail: postdetailReducer,
  pagedetail: pagedetailReducer,
  userlist: userlistReducer
});

//createSagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//createStore
const store = createStore(
  rootReducer, //pass combined reducer here once the remaining reducers are added
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

//register sagas
sagaMiddleware.run(watchPostList);
sagaMiddleware.run(watchPostTypeList);
sagaMiddleware.run(watchPostdetails);
sagaMiddleware.run(watchPagedetails);
sagaMiddleware.run(watchUserList);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
