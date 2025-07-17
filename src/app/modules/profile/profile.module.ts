import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
