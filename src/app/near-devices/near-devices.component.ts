import { Component, OnInit } from '@angular/core';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'near-devices',
  templateUrl: './near-devices.component.html',
  styleUrls: ['./near-devices.component.scss']
})
export class NearDevicesComponent implements OnInit {

  public loading: boolean = false;
  public error: string = "";
  constructor(private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
    this.pingApi();
  }

  public pingApi() {

    console.log("ping");
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.pingApi();
        this.connectService.sendLocationToApi(position);
      },(err) => {
        console.log("error");
        this.pingApi();
      },options);
    }
  }
  public clickRetry() {
  }
}
