import { createAction, props } from '@ngrx/store';

interface ErrorMsg {
    message: string;
}

export interface User {
    id: number;
    username: string;
    token: string;
  }

export interface Login {
    username: string;
    password: string;
}

export const FETCHED_USER = createAction(
    '[INIT] fetched user',
    props<User>()
)

export const login = createAction(
  '[Login Page] Login',
  props<Login>()
);

export const loginSuccess = createAction(
    '[Login Page] Login success',
    props<User>()
);

export const loginFails = createAction(
    '[Login Page] Login failure',
    props<ErrorMsg>()
);
