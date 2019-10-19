import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'near-devices',
  templateUrl: './near-devices.component.html',
  styleUrls: ['./near-devices.component.scss']
})
export class NearDevicesComponent implements OnInit {

  public loading:boolean = false;
  constructor() { }

  ngOnInit() {
    this.loadNearDevices();
  }

  public loadNearDevices() {
    this.loading = true;
  }

}
