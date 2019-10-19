import { Component, OnInit } from '@angular/core';
import { BluetoothTestComponent } from '../bluetooth-test/bluetooth-test.component';

@Component({
  selector: 'near-devices',
  templateUrl: './near-devices.component.html',
  styleUrls: ['./near-devices.component.scss']
})
export class NearDevicesComponent implements OnInit {

  public loading: boolean = false;
  public error: string = "";
  constructor() { }

  ngOnInit() {
    //this.loadNearDevices();
  }

  public loadNearDevices() {
    this.loading = true;

    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service']
    })
      .then(device => {
        this.loading = false;
        console.log(device);
      })
      .catch(error => {
      this.error = error.message; this.loading = false;
      });
  }
  public hitApi() {

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
      },(err) => {

      },options);
    }
  }
  public clickRetry() {
    this.hitApi();
    //this.loadNearDevices();
  }
}
