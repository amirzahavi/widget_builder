import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Notification {
  error: boolean;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notify: Subject<Notification> = new Subject();

  constructor() { }
}
