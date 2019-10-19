import { Component, OnInit } from '@angular/core';
import { SignupRequest } from 'src/models/SignupRequest';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {

  public error: string;
  public disabled: boolean = false;
  public newUser: SignupRequest;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.newUser = new SignupRequest();
  }

  clickSignup() {
    this.disabled = true;
    this.auth.signup(this.newUser).subscribe(val => {
      this.router.navigateByUrl("dashboard");
    },
    err => {
      this.disabled = false;
      this.error = "Could not sign up";
    });
  }
}

