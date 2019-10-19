import { Component, OnInit } from '@angular/core';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/models/Account';
import { UserPosition } from 'src/models/UserPosition';

@Component({
  selector: 'near-devices',
  templateUrl: './near-devices.component.html',
  styleUrls: ['./near-devices.component.scss']
})
export class NearDevicesComponent implements OnInit {

  public peopleNearMe: Account;

  public loading: boolean = false;
  public error: string = "";
  public tick: any;
  constructor(private connectService: ConnectOnCommuteService) { }


  public displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  ngOnInit() {
    this.getNearMe();
  }

  public getNearMe() {
    clearTimeout(this.tick);
    this.loading = true;
    this.connectService.getNearestUser().subscribe((res: Account) => {
      this.loading = false;
      this.peopleNearMe = res;
      console.log(res);
      this.schedule();
    }, err => {
      this.error = err.message;
      this.loading = false;
      this.schedule();
    })
  }
  public schedule() {
    clearTimeout(this.tick);
    this.tick = setTimeout(() => {
      this.getNearMe();
    }, 10000);
  }
}
