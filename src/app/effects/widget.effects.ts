import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import {
    LOAD_WIDGETS,
    WIDGETS_LOADED,
    WIDGETS_LOADED_FAILED,
    SAVE_WIDGET, WIDGET_SAVED,
    WIDGET_SAVED_FAILED
} from '../actions/widget.actions';
import { Widget } from '../reducers/widgets.reducers';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class WidgetEffects {

    constructor(private actions$: Actions, private client: HttpClient, private notificationService: NotificationService) {}

    loadWidgets$ = createEffect(() => this.actions$.pipe(
        ofType(LOAD_WIDGETS),
        mergeMap(() => this.client.get<Widget[]>('http://localhost:4000/widgets').pipe(
            map(widgets => WIDGETS_LOADED({widgets})),
            catchError(() => of(WIDGETS_LOADED_FAILED))
        ))
    ));

    saveWidget$ = createEffect(() => this.actions$.pipe(
        ofType(SAVE_WIDGET),
        mergeMap(action => this.client.post('http://localhost:4000/widgets', action.widget).pipe(
            map(() => {
                this.notificationService.notify.next({error: false, message: 'widget saved'});
                return WIDGET_SAVED();
            }),
            catchError(() => {
                this.notificationService.notify.next({error: true, message: 'failed to save widget'});
                return EMPTY;
            })
        ))
    ));
}

