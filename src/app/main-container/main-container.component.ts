import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Account} from '../../models/Account';
import { ConnectOnCommuteService } from 'src/services/connectOnCommute.service';
import $ from 'jquery';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  public user: Account = this.auth.getUser();

  public status;

  public a = 0;

  constructor(private auth:AuthService,private connectService: ConnectOnCommuteService) { }

  ngOnInit() {
    this.getFindableStatus();
  }

  public getFindableStatus() {
    this.connectService.getFindableStatus().subscribe(val => {
      this.status = val;
    },err => {
      console.log(err);
    });
  }
  public toggleFindableStatus() {
    this.connectService.toggleFindableStatus().subscribe((val:Account) => {
      this.status = val.findableStatus;
    },err => {
      console.log(err);
    });
  }
}
