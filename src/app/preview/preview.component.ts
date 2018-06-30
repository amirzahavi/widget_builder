import { Component, OnInit } from '@angular/core';

import { Element, ElementType } from "../models/Element";
import { ElementsService } from "../elements.service";
import { WidgetBuilderService } from "../widget-builder.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  widget: string = "";

  constructor(private elements: ElementsService
            ,private widgetBuilder: WidgetBuilderService) { }

  ngOnInit() {
    this.elements.elements_updated.subscribe((els) => 
        this.BuildWidget(els)
    );
  }  

  allowDrop($event: Event){
    if($event.target instanceof HTMLParagraphElement){ 
      $event.preventDefault();
    }
  }

  drop($event){   
    $event.preventDefault();
    var elementType : number = +$event.dataTransfer.getData("type");    
    this.elements.addElement(elementType);    
  }

  private BuildWidget(els: Element[]){
      this.widget = this.widgetBuilder.build(els);        
  }
}
