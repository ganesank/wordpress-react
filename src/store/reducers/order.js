//order reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

//set initial state
const initialState = {
  response: null,
  loading: false,
  error: null
};

//update state
//

//checkoutStart
const checkoutStart = (state, action) => {
  return updateObject(state, {loading: true});  
};

//checkoutSuccess
const checkoutSuccess = (state, action) => {
  return updateObject(state, {
    response: action.response,
    loading: false
  })
};

//checkoutFailed
const checkoutFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  })
};

//

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.CHECKOUT_START: return checkoutStart(state, action);
    case actionTypes.CHECKOUT_SUCCESS: return checkoutSuccess(state, action);
    case actionTypes.CHECKOUT_FAILED: return checkoutFailed(state, action);
    default: return state;
  }
};

export default reducer;