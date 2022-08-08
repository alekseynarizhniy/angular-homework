import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { DataService } from 'src/app/services/data.service';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';

import { User } from '../../interfaces/users';

@Component({
  selector: 'app-dialog-registration',
  templateUrl: './dialog-registration.component.html',
  styleUrls: ['./dialog-registration.component.scss'],
})
export class DialogRegistrationComponent implements OnInit {
  public closeIcon: string = '../../../assets/images/cross-icon.svg';
  private url: string = 'users';

  constructor(
    public dialogRef: MatDialogRef<DialogSignInComponent>,
    public users: DataService
  ) {}

  ngOnInit() {}

  public onSubmit(f: NgForm): Boolean {
    const value: User = f.value;

    this.users.updateData('users', value).subscribe(res => console.log("Success"));

    this.onClose();

    return true;
  }

  public onClose() {
    this.dialogRef.close();
  }
}
