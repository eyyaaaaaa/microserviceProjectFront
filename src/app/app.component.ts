import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app-front';

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
