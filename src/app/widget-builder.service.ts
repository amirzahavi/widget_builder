import { Injectable } from '@angular/core';

import { Element } from './models/Element';

@Injectable({
  providedIn: 'root'
})
export class WidgetBuilderService {

  private _css: any = require('./widget-builder.css');

  constructor() { }

  private readonly FORM_BEGIN: string = '<div class=\'widget\'><form>';
  private readonly FORM_END: string = '</form></div>';
  private readonly FORM_BUTTON: string = '<div class=\'form-btn\'><button type=\'submit\'>Submit</button></div>';

  build(elements: Element[]): string {
      const widget: string[] = [];

      /*count the number of each element type*/
      const countElements = new Map();

      widget.push(`<style>${this._css.default}</style>`);
      widget.push(this.FORM_BEGIN);

      elements.forEach(element => {
        const elementCount = countElements.get(element.type) || 0;
        widget.push(element.Write(elementCount));
        countElements.set(element.type, elementCount + 1);
      });

      widget.push(this.FORM_BUTTON);
      widget.push(this.FORM_END);

      return widget.join('');
  }
}
