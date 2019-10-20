import { Component, OnInit } from '@angular/core';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';

@Component({
  selector: 'connection-log',
  templateUrl: './connection-log.component.html',
  styleUrls: ['./connection-log.component.scss']
})
export class ConnectionLogComponent implements OnInit {

  displayedColumns: string[] = ['timestamp', 'firstName', 'lastName', 'email'];

  public connections$ = this.connectService.getAllConnections();

  constructor(private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
  }

}
