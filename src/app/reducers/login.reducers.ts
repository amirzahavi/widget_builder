import { createReducer, on, Action } from '@ngrx/store';

import {loginSuccess, loginFails, login, User} from '../actions/user.actions';

export interface LoginState {
  error?: string;
  user: User;
}

const INITIALIE_STATE: LoginState = {
    error: null,
    user: null
};

const _loginReducer = createReducer(INITIALIE_STATE, 
  on(login, state => ({...state, error: null})),
  on(loginSuccess, (state, user) => ({...state, user })),
  on(loginFails, (state, error) => ({...state, error: error.message}))
);

export function loginReducer(state: LoginState | undefined, action: Action) {
  return _loginReducer(state, action);
}
