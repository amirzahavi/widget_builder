import { createAction, props } from '@ngrx/store';
import { Widget } from '../reducers/widgets.reducers';
import { Element } from '../models/Element';


export const LOAD_WIDGETS = createAction(
    '[Widgets Page] load widgets'
);

export const WIDGETS_LOADED = createAction(
    '[Widgets Page] widgets loaded',
    props<{widgets: Widget[]}>()
);

export const WIDGETS_LOADED_FAILED = createAction(
    '[Widgets Page] widgets loaded failed'
);

export const ADD_ELEMENT = createAction(
    '[Widget Page] add element',
    props<{id: string, element: Element}>()
);

export const SAVE_WIDGET = createAction(
    '[Widget Page] save widget',
    props<{widget: Widget}>()
);

export const WIDGET_SAVED = createAction(
    '[Widget Page] widget saved'
);

export const WIDGET_SAVED_FAILED = createAction(
    '[Widget Page] widget saved failed'
);


