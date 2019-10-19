import { Component, OnInit, Input } from '@angular/core';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss']
})
export class StatusButtonComponent implements OnInit {

  @Input("status") public status;

  public faWheelchair = faWheelchair;

  constructor() { }

  ngOnInit() {
  }

}
