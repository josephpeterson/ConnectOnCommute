import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }

  public clickLogout() {
    this.auth.clearToken();
    this.router.navigateByUrl("/");
  }
}
