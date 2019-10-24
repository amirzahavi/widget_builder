import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Widget, selectWidget } from '../reducers/widgets.reducers';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SAVE_WIDGET } from '../actions/widget.actions';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  widget$: Observable<Widget>;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.widget$ = this.route.paramMap.pipe(
      switchMap(param => this.store.pipe(select(selectWidget, {id: param.get('id')})))
    );
  }

  save(widget: Widget) {
    this.store.dispatch(SAVE_WIDGET({widget}));
  }
}
