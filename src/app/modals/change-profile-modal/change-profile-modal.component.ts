import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import { Account } from 'src/models/Account';

@Component({
  selector: 'app-change-profile-modal',
  templateUrl: './change-profile-modal.component.html',
  styleUrls: ['./change-profile-modal.component.scss']
})
export class ChangeProfileModalComponent implements OnInit {

  public account: Account;
  public disabled: boolean = false;
  constructor(private _dialog: MatDialogRef<ChangeProfileModalComponent>, private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
  }

  clickUpdate() {
    this.disabled = true;
    this.connectService.updateAccount(this.account).subscribe((acc:Account) => {
     this.disabled = false;
      this.account = acc;
      this._dialog.close();
    },err => {
     this.disabled = false;

    });
  }
}
