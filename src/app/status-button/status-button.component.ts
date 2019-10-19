import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss']
})
export class StatusButtonComponent implements OnInit {

  @Input("status") public status;
  
  constructor() { }

  ngOnInit() {
  }

}
