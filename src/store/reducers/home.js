//home page reducer
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import logger from '../../shared/logger/logger';

//set initial state
const initialState = {  
  homePageData: null,
  error: null,
  loading: false
};

//update state
//

//fetchHomeDataStart
const fetchHomeDataStart = (state, action) => {
  return updateObject(state, { loading: true });
};

//fetchHomeDataSuccess
const fetchHomeDataSuccess = (state, action) => {
  logger.debug('from reducer - action', action); 
  return updateObject(state, 
    {
      homePageData: action.homePageData,     
      loading: false
    }    
  );
};

//fetchHomeDataFailed
const fetchHomeDataFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

//

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_HOME_DATA_START: return fetchHomeDataStart(state, action);
    case actionTypes.FETCH_HOME_DATA_SUCCESS: return fetchHomeDataSuccess(state, action);
    case actionTypes.FETCH_HOME_DATA_FAILED: return fetchHomeDataFailed(state, action);    
    default: return state;
  }
};

export default reducer;