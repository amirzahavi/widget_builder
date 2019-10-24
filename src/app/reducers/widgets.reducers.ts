import { createReducer, on, Action, createSelector } from '@ngrx/store';

import { WIDGETS_LOADED, WIDGETS_LOADED_FAILED, ADD_ELEMENT } from '../actions/widget.actions';
import { State } from '.';
import { Element } from '../models/Element';

export enum WIDGET_STATUS {
    DRAFT,
    ACTIVE
}

export interface Widget {
    id: string;
    name: string;
    status: WIDGET_STATUS;
    elements: Element[];
}

export interface WidgetsState {
    widgets: Widget[];
}

const INITIALIE_STATE: WidgetsState = {
    widgets: []
};

export const selectWidget = createSelector(
    (state: State) => state.widgets.widgets,
    (widgets: Widget[], {id}: {id: string}) => widgets.find(w => w.id === id)
);

const _widgetsReducer = createReducer(INITIALIE_STATE,
  on(WIDGETS_LOADED, (state, {widgets}) => ({...state, widgets})),
  on(WIDGETS_LOADED_FAILED, state => {
      console.log('widgets failed to load');
      return state;
  }),
  on(ADD_ELEMENT, (state, {id, element}) => {
      const widget = state.widgets.find(w => w.id === id);
      const rest = state.widgets.filter(w => w.id !== id);

      const newWidget = {...widget, elements: [...widget.elements, element]};

      return {...state, widgets: [...rest, newWidget]};
  })
);

export function widgetsReducer(state: WidgetsState | undefined, action: Action) {
  return _widgetsReducer(state, action);
}
