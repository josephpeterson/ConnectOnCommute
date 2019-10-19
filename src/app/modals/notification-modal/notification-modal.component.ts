import { Component, OnInit } from '@angular/core';
import { AccountNotification } from 'src/models/AccountNotification';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {

  public notification: AccountNotification;
  constructor() { }

  ngOnInit() {
  }

}
