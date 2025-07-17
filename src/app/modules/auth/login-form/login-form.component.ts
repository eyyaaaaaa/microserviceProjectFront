import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log('Logging in with', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // optionally store token, or it's already handled in AuthService
          this.router.navigate(['/product']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // optionally show error to user
        }
      });
    } else {
      console.warn('Login form is not complete.');
      this.loginForm.markAllAsTouched();
    }
  }
}
