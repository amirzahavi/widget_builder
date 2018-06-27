import { Injectable } from '@angular/core';

import { Element } from "./models/Element";

@Injectable({
  providedIn: 'root'
})
export class WidgetBuilderService {

  private _css : string = require("./widget-builder.css");

  constructor() { }
  
  private readonly FORM_BEGIN : string = "<div class='widget'><form>";
  private readonly FORM_END : string = "</form></div>";
  private readonly FORM_BUTTON : string = "<div class='form-btn'><button type='submit'>Submit</button></div>";

  build(elements: Element[]): string{
      let widget : string[] = [];

      /*count the number of each element type*/
      let dic = {};      

      widget.push(`<style>${this._css}</style>`);
      widget.push(this.FORM_BEGIN);      

      elements.forEach(element=> {
          let i = dic[element.type] || 0;
          widget.push(element.Write(i));
          dic[element.type] = i + 1;
      });

      widget.push(this.FORM_BUTTON);
      widget.push(this.FORM_END);

      return widget.join("");
  }  
}
