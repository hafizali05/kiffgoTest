import * as types from './types';
import Api from '../lib/api';

export function login() {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_USER,
      user: {
        loggedIn: true,
        name: 'Alex Test'
      }
    });
  }
}

export function setWindowshopItems(user) {
  return {
    type: types.SET_USER,
    user
  }
}
