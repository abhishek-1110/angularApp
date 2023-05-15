import { Component } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { ActivatedRoute } from '@angular/router';

import { ApicallService } from '../services/apicall.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // this for storing serivce data
  usersData: any;

  // for fetching email and password using dynamic routing
  email: any;
  password: any;

  constructor(
    private user: UserInformationService,
    private route: ActivatedRoute,
    private apicall: ApicallService
  ) {
    //  console.log(user);
    this.usersData = user.users();
    this.email = this.route.snapshot.queryParamMap.get('email') ?? '';
    this.password = this.route.snapshot.queryParamMap.get('password') ?? '';

    apicall.posts().subscribe((data) => {
      console.log(data);
    });
  }
}
