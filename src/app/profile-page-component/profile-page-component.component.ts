import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { MatDialog } from '@angular/material';
import { ChangeProfileModalComponent } from '../modals/change-profile-modal/change-profile-modal.component';
import { Account } from 'src/models/Account';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';

@Component({
  selector: 'app-profile-page-component',
  templateUrl: './profile-page-component.component.html',
  styleUrls: ['./profile-page-component.component.scss']
})
export class ProfilePageComponentComponent implements OnInit {


  public user$  = this.connectService.getMyAccount();

  constructor(private auth: AuthService,private dialog:MatDialog,private connectService:ConnectOnCommuteService) { }

  ngOnInit() {
  }


  public clickChangeQuestion(user: Account) {
    var d = this.dialog.open(ChangeProfileModalComponent,{
      width:"550px"
    });
    d.componentInstance.account = user;
  }
}
