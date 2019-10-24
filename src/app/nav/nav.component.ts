import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../actions/user.actions';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logo = require('../../assets/logo.svg');
  user$: Observable<User>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(select(state => state.login.user));
  }

}
