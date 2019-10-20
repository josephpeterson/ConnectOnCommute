import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';

@Component({
  selector: 'app-connection-histogram',
  templateUrl: './connection-histogram.component.html',
  styleUrls: ['./connection-histogram.component.scss']
})
export class ConnectionHistogramComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
  }
}
