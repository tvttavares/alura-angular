import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { UserService } from './../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
  }
}