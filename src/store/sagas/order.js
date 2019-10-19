//order sagas
import { put } from 'redux-saga/effects';

import logger from '../../shared/logger/logger';
import axios from '../../shared/axiosInstanceWpress';
import * as actions from '../actions';
import apiConfig from '../../config/wpressAPIConfig';
import { CheckoutError } from '../../shared/exceptions/checkoutError';

//checkoutSaga
export function* checkoutSaga(action) {  
    yield put(actions.checkoutStart());
    try{
      const checkoutApi = apiConfig().CHECKOUT;
      logger.debug('checkoutSaga - api url', checkoutApi.url);
      const response = yield axios.post(checkoutApi.url, 
                        action.data, checkoutApi.headers); //TODO: 1. update api path, 2. read path from config    
      yield put(actions.checkoutSuccess(response.data));
      //yield put(actions.checkOutFailed(new CheckoutError({message:'error occured'}))); //TODO: remove test code
    }catch(error) {    
      yield put(actions.checkOutFailed(new CheckoutError(error)));
    }
  
}
