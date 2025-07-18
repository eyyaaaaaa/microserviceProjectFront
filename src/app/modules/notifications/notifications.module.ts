import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotificationsListComponent } from './notification-list/notification-list.component'; // adjust path as needed
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  declarations: [
    NotificationsListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    NotificationsRoutingModule
  ],
  providers: [],
})
export class NotificationsModule { }
