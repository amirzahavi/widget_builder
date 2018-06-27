import { Component, OnInit } from '@angular/core';

import { Element, ElementType  } from "../models/Element";
import { ElementsService  } from "../elements.service";

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  elements: Element[];


  constructor(private elementService: ElementsService) { }

  ngOnInit() {
    this.elementService.getElements().subscribe(el => this.elements = el);
  }

  GetType(type: ElementType): string{
    return ElementType[type];
  }

  OnDrag($event, el: Element){
    $event.dataTransfer.setData("type", el.type);
  }
}
