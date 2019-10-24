import {ActionReducerMap} from '@ngrx/store';

import { loginReducer, LoginState } from './login.reducers';
import { WidgetsState, widgetsReducer } from './widgets.reducers';

export interface State {
    login: LoginState;
    widgets: WidgetsState;
}

export const reducers: ActionReducerMap<State> = {
    login: loginReducer,
    widgets: widgetsReducer
};


