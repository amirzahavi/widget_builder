import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NotificationService, Notification } from './notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  notification: Notification;
  show = false;

  private sub: Subscription;

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.sub = this.service.notify.subscribe(notification => {
      this.show = true;
      this.notification = notification;
      setTimeout(
        () => this.show = false,
        this.notification.duration || 3000
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
