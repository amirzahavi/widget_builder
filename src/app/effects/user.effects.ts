import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { User, login, loginSuccess, loginFails } from '../actions/user.actions';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private client: HttpClient, private router: Router) {}

    fetchUser$ = createEffect(() => this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        mergeMap(() => {
            const token = window.localStorage.getItem('token');
            if (!token) { return EMPTY; }

            return this.client.get<User>('http://localhost:4000/me').pipe(
                map(user => loginSuccess(user)),
                catchError(() => EMPTY)
            );
        })
    ));

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        mergeMap(data => this.client.post<User>('http://localhost:4000/login', data).pipe(
            map(user => loginSuccess(user)),
            catchError(response => of(loginFails({message: response.error.err})))
        ))
    ));

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        mergeMap(({token}) => {
            // save token in local-storage
            window.localStorage.setItem('token', token);
            // redirect page
            this.router.navigate(['/widgets']);
            return EMPTY;
        })
    ));
}

