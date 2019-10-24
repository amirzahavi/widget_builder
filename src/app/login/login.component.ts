import { Component } from '@angular/core';

import {Login, login, User} from '../actions/user.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: Login;
  loginError$: Observable<string>;
  user$: Observable<User>;

  constructor(private store: Store<State>) {
    this.model = { username: '', password: '' };
    this.loginError$ = store.pipe(select(state => state.login.error));
  }

  onSubmit() {
    console.log(`submitting ${JSON.stringify(this.model)}`);
    this.store.dispatch(login(this.model));
  }
}
