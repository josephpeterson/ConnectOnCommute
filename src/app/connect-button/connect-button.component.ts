import { Component, OnInit, Input } from '@angular/core';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { Account } from 'src/models/Account';

@Component({
  selector: 'connect-button',
  templateUrl: './connect-button.component.html',
  styleUrls: ['./connect-button.component.scss']
})
export class ConnectButtonComponent implements OnInit {

  public disabled = false;
  public loading = true;
  public connected = false;
  @Input("target") public target: Account;

  constructor(public connectService: ConnectOnCommuteService) { }

  ngOnInit() {
    this.checkConnection();
  }

  public clickConnect() {
    if(this.loading) return;

    this.disabled = true;
    this.connectService.getConnected(this.target.id).subscribe(val => {
      if(val)
      {
        this.checkConnection();
      }
    },err => {
      this.disabled = false;
      console.error(err);
    });
  }

  public checkConnection() {
    this.connectService.isConnected(this.target.id).subscribe((val:boolean) => {
      this.loading = false;
      this.connected = val;
    },err => {
      console.error(err);
    })
  }
}
