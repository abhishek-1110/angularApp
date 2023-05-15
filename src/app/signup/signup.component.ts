import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  title = 'reactive sign up form';
  signupForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$&]*$'), Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$&]*$'), Validators.minLength(5)]),
  });

  signupUser() {

  }

  get user() {
    return this.signupForm.get('user');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }



  goToSignIn() {
    this.router.navigate(['/signin']);

  }
}
