import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ElementsComponent } from './elements/elements.component';
import { PreviewComponent } from './preview/preview.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { LoginComponent } from './login/login.component';
// pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
// ngrx
import {reducers} from './reducers';
import effects from './effects';
// guards
import { AuthGuard } from './guards/auth.guard';
// interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { environment } from '../environments/environment';
import { WidgetCardComponent } from './widget-card/widget-card.component';
import { WidgetComponent } from './widget/widget.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  { path: 'widgets', canActivate: [AuthGuard], component: WidgetsComponent},
  { path: 'widgets/:id', canActivate: [AuthGuard], component: WidgetComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ElementsComponent,
    PreviewComponent,
    SafeHtmlPipe,
    WidgetsComponent,
    LoginComponent,
    WidgetCardComponent,
    WidgetComponent,
    NotificationComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
