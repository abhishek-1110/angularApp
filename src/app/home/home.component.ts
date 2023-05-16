import { Component } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { ActivatedRoute } from '@angular/router';

import { ApicallService } from '../services/apicall.service';
import { LocalStorageInfoService } from '../services/local-storage-info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // this for storing serivce data
  usersData: any;

  apiUsersData: any;
  // for fetching email and password using dynamic routing
  email: any;
  password: any;


  constructor(
    private user: UserInformationService,
    private route: ActivatedRoute,
    private apicall: ApicallService,
    private userInfo: LocalStorageInfoService,
  ) {
    //  console.log(user);
    this.usersData = user.users();
    this.email = this.route.snapshot.queryParamMap.get('email') ?? '';
    this.password = this.route.snapshot.queryParamMap.get('password') ?? '';


    // from localStorage
    this.usersData = userInfo.getData();
    // console.log(this.usersData);
    // apicall.posts().subscribe((data) => {
    //   // console.log(data);
    //   this.apiUsersData = data;
    // });
  }
}
