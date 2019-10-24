import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const token = window.localStorage.getItem('token');
        if (!token) {
            return next.handle(req);
        }
        const newReq = req.clone({
           setHeaders: {
               'token': token
           }
        });
        return next.handle(newReq);
  }
}