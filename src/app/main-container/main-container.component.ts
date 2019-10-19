import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Account} from '../../models/Account';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  public user: Account = this.auth.getUser();

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}
