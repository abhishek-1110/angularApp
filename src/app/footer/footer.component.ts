import { Component } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  users:any;
  constructor(private user: UserInformationService) {
      this.users = user.users();
  }
}
