import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  autorization: Boolean = false;

  constructor(public useAuthorization: UserService) {}

  ngOnInit(): void {
    this.useAuthorization.getAutorizationStatus().subscribe((autorizationStatus: Boolean) => {
            this.autorization = autorizationStatus;
        });
  }

  public onClick(): void {
   this.useAuthorization.outUserAutorizationStatus();
  }

}
