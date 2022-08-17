import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit, OnDestroy {
  public autorization: Boolean = false;
  private subcription!: SubscriptionLike;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subcription = this.userService
      .getAutorizationStatus()
      .subscribe((autorizationStatus: Boolean) => {
        this.autorization = autorizationStatus;
      });
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  public onClick(event: any): void {
    this.userService.outUserAutorizationStatus();

    event.target.removeEventListener('click', this.onClick, true);
  }
}
