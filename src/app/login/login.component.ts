import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  title = 'reactive sign in form';
  loginForm = new FormGroup({
    user: new FormControl('@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9!@#$&]*$'),
      Validators.minLength(5),
    ]),
  });

  loginUser() {
    // console.warn(this.loginForm.value);
    if (
      this.loginForm.get('user')?.value?.length == 0 ||
      this.loginForm.get('password')?.value?.length == 0
    ) {
      alert("Fields can't be empty.");
      return;
    }
    console.log('Username:', this.loginForm.get('user')?.value);
    console.log('Password:', this.loginForm.get('password')?.value);
    // alert('login done');

    this.router.navigate(['/home'], {
      queryParams: {
        email: this.loginForm.get('user')?.value,
        password: this.loginForm.get('password')?.value,
      },
    });
  }

  // getter method
  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
