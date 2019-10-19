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
  @Input("target") public target: Account;

  constructor(public connectService: ConnectOnCommuteService) { }

  ngOnInit() {
  }

  public clickConnect() {
    this.disabled = true;
    this.connectService.getConnected(this.target.id).subscribe(val => {
      
    },err => {
      console.error(err);
    });
  }
}
