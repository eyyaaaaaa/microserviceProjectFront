import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './models/userProfile'; // adjust path

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly apiUrl = 'http://localhost:8091/api/user/me';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.apiUrl);
  }
}
