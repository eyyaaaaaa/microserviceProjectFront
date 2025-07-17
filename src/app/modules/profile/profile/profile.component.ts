import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile: any;
  profileForm!: FormGroup;
  isEditing = false;
  originalProfile: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8091/api/user/me').subscribe((data: any) => {
      this.profile = data;
      this.originalProfile = { ...data }; // Save original values
      this.profileForm = this.fb.group({
        externalId: [data.externalId],
        firstName: [data.firstName],
        lastName: [data.lastName],
        email: [data.email],
        birthDate: [data.birthDate]
      });
      this.isEditing = false;
      this.profileForm.disable();
    });
  }

  startEditing(): void {
    this.isEditing = true;
    this.profileForm.enable();
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.profileForm.disable();
    this.profileForm.reset(this.originalProfile);
  }

  saveChanges(): void {
    if (!this.profileForm.dirty) return;

    const updatedData = this.profileForm.value;
    // Call your API to update the user profile
    this.http.put('http://localhost:8088/auth/update-profile', updatedData, {
      responseType: 'text'
    }).subscribe(() => {
      this.profile = { ...this.profile, ...updatedData };
      this.originalProfile = { ...this.profile };
      this.profileForm.markAsPristine();
      this.isEditing = false;
      this.profileForm.disable();
    });

  }
}
