import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { SignupRequest } from '../models/SignupRequest';
import { Account } from 'src/models/Account';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private _url: string;

  public aquariumId: number;
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
    this._url = environment.urls.connectOnCommuteApi;
    this.jwtHelper = new JwtHelperService();
  }

  public storeToken(token) {
    localStorage["connectOnCommuteApitoken"] = token;
  }
  public getToken() {
    return localStorage["connectOnCommuteApitoken"];
  }
  public clearToken() {
    return delete localStorage["connectOnCommuteApitoken"];
  }
  public isAuthenticated() {
    var token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token))
      return true;
    return false;
  }
  public login(email: string, password: string) {
    var req = this.http.post(this._url + `/v1/Account/Login`, {
      email: email,
      password: password
    });
    var a = new Subject();
    req.subscribe((response: TokenResponse) => {
      this.storeToken(response.token);
      a.next(this.getUser());
    },
      err => {
        a.error(err);
      });
    return a;
  }
  public signup(signupRequest: SignupRequest) {
    var req = this.http.post(this._url + `/v1/Account/Signup`, signupRequest);
    var a = new Subject();
    req.subscribe((response: TokenResponse) => {
      console.log("sdasdassda");
      this.storeToken(response.token);
      a.next(this.getUser());
    },
      err => {
         console.log(err);
        a.error(err);
      });
    return a;
  }
  public getUser(): Account {
    var data = this.jwtHelper.decodeToken(this.getToken());

    var user = new Account();
    user.id = data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    //user.username = data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    user.role = data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    user.email = data["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    return user;
  }
}
class TokenResponse {
  public token;
}