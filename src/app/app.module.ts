import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule  } from "@angular/common";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ElementsComponent } from './elements/elements.component';
import { PreviewComponent } from './preview/preview.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ElementsComponent,
    PreviewComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
