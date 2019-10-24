import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { Observable } from 'rxjs';
import { Widget } from '../reducers/widgets.reducers';
import { LOAD_WIDGETS } from '../actions/widget.actions';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  widgets$: Observable<Widget[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.widgets$ = this.store.pipe(select(state => state.widgets.widgets));
    this.store.dispatch(LOAD_WIDGETS());
  }

}
