import { Component, OnInit } from '@angular/core';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import * as moment from 'moment';

@Component({
  selector: 'connection-log',
  templateUrl: './connection-log.component.html',
  styleUrls: ['./connection-log.component.scss']
})
export class ConnectionLogComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', 'firstName', 'email'];

  public connections$ = this.connectService.getAllConnections();

  constructor(private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
  }


  public getEntryAge(date) {
    return moment(date).fromNow();

  }


}
