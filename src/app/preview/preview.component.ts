import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Element } from '../models/Element';
import { BehaviorTrigger } from '../models/Behavior';
import { ElementsService } from '../elements/elements.service';
import { WidgetBuilderService } from '../widget-builder.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { ADD_ELEMENT } from '../actions/widget.actions';
import { selectWidget } from '../reducers/widgets.reducers';
import { Subscription } from 'rxjs';
import { ModalService } from '../modal/modal-service.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  @Input() widgetId: string;
  widget: string = null;
  settings: any = {name: '', script: '', trigger: BehaviorTrigger.Click};
  triggers: {value: number, name: string}[] = [
    { value: BehaviorTrigger.Click, name: BehaviorTrigger[BehaviorTrigger.Click]},
    { value: BehaviorTrigger.Blur, name: BehaviorTrigger[BehaviorTrigger.Blur]},
    { value: BehaviorTrigger.Focus, name: BehaviorTrigger[BehaviorTrigger.Focus]}
  ];

  private sub: Subscription;

  constructor(private elements: ElementsService, private store: Store<State>
            , private widgetBuilder: WidgetBuilderService, private modal: ModalService) { }

  ngOnInit() {
    this.sub = this.store.pipe(select(selectWidget, {id: this.widgetId}))
      .subscribe(widget => this.BuildWidget(widget.elements));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  allowDrop($event: Event) {
    if ($event.target instanceof HTMLDivElement && $event.target.classList.contains('widget_container')) {
      $event.preventDefault();
    }
  }

  drop($event) {
    $event.preventDefault();
    const elementType = +$event.dataTransfer.getData('type');
    const element = this.elements.getElement(elementType, [this.settings]);
    this.modal.open('element-settings');
    this.store.dispatch(ADD_ELEMENT({id: this.widgetId, element}));
  }

  setElement() {
    console.log(JSON.stringify(this.settings));
    this.modal.close('element-settings');
  }

  private BuildWidget(els: Element[]) {
    if (!els || els.length === 0) {
      return;
    }

    els = els.map(el => el.Write ? el : this.elements.getElement(el.type));

    this.widget = this.widgetBuilder.build(els);
  }
}
