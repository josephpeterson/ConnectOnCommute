import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { Account } from 'src/models/Account';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { UserPosition } from 'src/models/UserPosition';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  public user: Account = this.auth.getUser();

  public loading: boolean = false;
  public error: string = "";
  tick: NodeJS.Timer;


  constructor(private auth: AuthService, private connectService: ConnectOnCommuteService, private router: Router) { }

  ngOnInit() {
    this.pingApi();
  }

  public clickLogout() {
    this.auth.clearToken();
    this.router.navigateByUrl("/");
  }

  public pingApi() {

    clearTimeout(this.tick);
    this.loading = true;
    this.error = null;

    console.log("ping");
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        var loc = new UserPosition();
        loc.latitude = position.coords.latitude;
        loc.longitude = position.coords.longitude;
        this.connectService.sendLocationToApi(loc).subscribe((pos) => {
          console.log("successfully shared location ",pos);
          this.loading = false;
          this.schedule();

        }, err => {
          console.log("Could not upload position");
          this.error = err.message;
          this.loading = false;
          this.schedule();
        })
      }, (err) => {
        console.log("Could not retrieve position coordinates");
        this.error = err.message;
        this.loading = false;
         this.schedule();
      }, options);
    }
  }
  public schedule() {
    clearTimeout(this.tick);
    this.tick = setTimeout(() => {
      this.pingApi();
    }, 10000);
  }
}
