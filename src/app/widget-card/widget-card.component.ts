import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../reducers/widgets.reducers';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
