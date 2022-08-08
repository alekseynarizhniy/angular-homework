import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/users';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { DialogRegistrationComponent } from '../dialog-registration/dialog-registration.component';

@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.scss'],
})
export class DialogSignInComponent {
  public closeIcon: string = '../../../assets/images/cross-icon.svg';
  private url: string = 'users';
  private users: User[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogSignInComponent>,
    public userService: DataService,
    public dialog: MatDialog,
    private userStatus: UserService
  ) {}

  ngOnInit() {
    this.userService.getData(this.url).subscribe((val) => {
      this.users = val;
    });
  }

  onSubmit(f: NgForm): Boolean {
    const value = f.value;

    if (value.login.length) {
      if (value.password.length) {
        let swither = false;
        this.users.forEach((element) => {
          if (
            element.login === value.login &&
            element.password === value.password
          )
            swither = true;
        });

        if (swither) {
          this.userStatus.addUser(this.users[value.login]);
          this.onClose();
          return true;
        }
      }
    }

    let dialog = document.body.querySelector('.dialog-login .message')!;

    dialog.innerHTML = 'wrong login or password';

    return false;
  }

  public onClose() {
    this.dialogRef.close();
  }

  public onRegistrate(){
    this.dialogRef.close();

    const dialogRef = this.dialog.open(DialogRegistrationComponent, {
      width: '500px',
    });
  }
}
