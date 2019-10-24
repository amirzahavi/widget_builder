import { Injectable, EventEmitter } from '@angular/core';
import { Observable , of  } from 'rxjs';

import { Element, ElementType } from '../models/Element';
import { TextElement } from '../models/elements/TextElement';
import { EmailElement } from '../models/elements/EmailElement';
import { PasswordElement } from '../models/elements/PasswordElement';
import { Behavior } from '../models/Behavior';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  private elements: Element[] = [
    new TextElement(),
    new EmailElement(),
    new PasswordElement(),
  ];

  constructor() { }

  getElements(): Observable<Element[]>{
      return of<Element[]>(this.elements);
  }

  getElement(type: ElementType, behaviors: Behavior[]): Element {
    switch (type) {
      case ElementType.Text:
        return new TextElement(behaviors);
      case ElementType.Email:
        return new EmailElement();
      case ElementType.Password:
        return new PasswordElement();
      default:
        throw new Error('unknown element type');
    }
  }
}


