import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageInfoService } from '../services/local-storage-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usersData: any;
  constructor(
    private router: Router,
    private localStorageInfo: LocalStorageInfoService
  ) {
    // console.log("Login data", localStorageInfo);
  }

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

  inputEmail = '';
  inputPassword = '';
  found : Boolean = false;

  loginUser() {
    // console.warn(this.loginForm.value);
    if (
      this.loginForm.get('user')?.value?.length == 0 ||
      this.loginForm.get('password')?.value?.length == 0
    ) {
      alert("Fields can't be empty.");
      return;
    }

    this.inputEmail = this.loginForm.get('user')?.value || '';
    this.inputPassword = this.loginForm.get('password')?.value || '';

    console.log('Username:', this.loginForm.get('user')?.value);
    console.log('Password:', this.loginForm.get('password')?.value);

    if (localStorage.getItem('usersData') === null) {
      alert('No user found.. Please sign up');
      this.router.navigate(['/signup']);
      return;
    } else {
      this.usersData = this.localStorageInfo.getData();
      // console.log(this.usersData);
    }

    this.usersData.filter((x: any) => {
      if (x.email == this.inputEmail && x.password == this.inputPassword) {
        this.found = true;
        this.router.navigate(['/home'], {
          queryParams: {
            email: this.loginForm.get('user')?.value,
            password: this.loginForm.get('password')?.value,
          },
        });
      }
    });

    if (this.found === false) {
      alert("User not found. Please sign up first.")
      this.router.navigate(['/signup']);
    }

    // for (let i = 0; i < this.usersData.length; i++) {
    //   if (
    //     this.usersData[i].email == this.inputEmail &&
    //     this.usersData[i].password == this.inputPassword
    //   ) {
    //     this.router.navigate(['/home'], {
    //       queryParams: {
    //         email: this.loginForm.get('user')?.value,
    //         password: this.loginForm.get('password')?.value,
    //       },
    //     });
    //   }
    // }
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
