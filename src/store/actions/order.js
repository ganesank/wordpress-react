//order action dispatchers
import * as actionTypes from './actionTypes';

export const checkout = (data) => {
  return {
    type: actionTypes.CHECKOUT,
    data: data
  };
}

export const checkoutStart = () => {
  return { 
    type: actionTypes.CHECKOUT_START
  };
}

export const checkoutSuccess = (response) => {
  return {
    type: actionTypes.CHECKOUT_SUCCESS,
    response: response
  };
}

export const checkOutFailed = (error) => {
  return {
    type: actionTypes.CHECKOUT_FAILED,
    error: error
  };
}