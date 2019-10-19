import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  disabled: boolean;
  email: string;
  password: string;
  error: string;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    if(this.auth.isAuthenticated())
      this.router.navigateByUrl("/dashboard");
  }

  public clickSignup() {

  }
}
