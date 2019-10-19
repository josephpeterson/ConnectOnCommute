import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-modal-component',
  templateUrl: './login-modal-component.component.html',
  styleUrls: ['./login-modal-component.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,private _dialog:MatDialogRef<LoginModalComponent>) { }

  public error: string;
  public password: string;
  public email: string;
  public disabled: boolean = false;

  public faUser = faUser;
  public faLock = faLock;

  ngOnInit() {

  }

  clickLogin() {
    this.disabled = true;
    this.auth.login(this.email, this.password).subscribe(val => {
      this.router.navigateByUrl("dashboard");
      this._dialog.close();
    }, (err: HttpErrorResponse) => {
      this.disabled = false;
      this.error = err.statusText;
    });
  }
}

