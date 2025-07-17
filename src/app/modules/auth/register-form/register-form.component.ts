import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log('Registering with', this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // optionally store token, or it's already handled in AuthService
          this.router.navigate(['/auth']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // optionally show error to user
        }
      });
    } else {
      console.warn('Register form is not complete.');
      this.registerForm.markAllAsTouched();
    }
  }
}
