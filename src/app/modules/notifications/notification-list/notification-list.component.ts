import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationModel } from '../model/notification-model';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  notifications: NotificationModel[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("AAAAAAAAAAAAAAAAAAAa");

    this.fetchNotifications();
  }

  fetchNotifications(): void {
    console.log("aaaaaaaaaaaaaa");

    this.http.get<NotificationModel[]>('http://localhost:8085/api/notification').subscribe({
      next: (data) => this.notifications = data,
      error: (err) => console.error('Failed to load notifications', err)
    });
  }
}
