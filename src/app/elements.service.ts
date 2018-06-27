import { Injectable, EventEmitter } from '@angular/core';
import { Observable , of  } from "rxjs";

import { Element, ElementType } from "./models/Element";
import { TextElement } from './models/elements/TextElement';
import { EmailElement } from './models/elements/EmailElement';
import { PasswordElement } from './models/elements/PasswordElement';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  private elements: Element[] = [
    new TextElement(),
    new EmailElement(),
    new PasswordElement(),
  ];

  private selected_elements: Element[] = [];
  elements_updated: EventEmitter<Element[]> = new EventEmitter();

  constructor() { }

  getElements(): Observable<Element[]>{
      return of<Element[]>(this.elements);
  }  

  // addElement(el: Element): void{
  //   this.selected_elements.push(el);
  //   this.elements_updated.emit(this.selected_elements);
  // }

  addElement(type: ElementType): void{
    let el : Element = null;
    switch(type)
    {
      case ElementType.Text:
        el = new TextElement();
        break;
      case ElementType.Email:
        el = new EmailElement();
        break;
      case ElementType.Password:
        el = new PasswordElement();
        break;
      default:
        throw new Error("unknown element type");
    }
    this.selected_elements.push(el);
    this.elements_updated.emit(this.selected_elements);
  }
}


