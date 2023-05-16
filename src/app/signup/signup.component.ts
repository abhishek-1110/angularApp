import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageInfoService } from '../services/local-storage-info.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router, private localStorageInfo: LocalStorageInfoService) {}

  // ls  : LocalStorageInfoService = new LocalStorageInfoService();
  title = 'reactive sign up form';
  signupForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9!@#$&]*$'),
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9!@#$&]*$'),
      Validators.minLength(5),
    ]),
  });


  usersData: any;
  temp: any = '';

  signupUser() {
    if (
      this.signupForm.get('password')?.value !=
      this.signupForm.get('confirmPassword')?.value
    ) {
      alert('Password mismatches');
      return;
    } else {
      // console.log(this.signupForm.get('user')?.value);
      if (localStorage.getItem('usersData') == null) {
        this.usersData = [];
        localStorage.setItem('usersData', JSON.stringify(this.usersData));
      }
      this.temp = JSON.parse(localStorage.getItem('usersData') || '');
      this.temp.push({
        email: this.signupForm.get('user')?.value,
        password: this.signupForm.get('password')?.value,
      });
      localStorage.setItem('usersData', JSON.stringify(this.temp));
      this.router.navigate(['/signin']);
      this.localStorageInfo.getData();
    }
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
