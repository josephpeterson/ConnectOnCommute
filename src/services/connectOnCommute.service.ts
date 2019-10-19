import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ConnectOnCommuteService {
  private _url: string;
  constructor(private http: HttpClient) {
    this._url = environment.urls.connectOnCommuteApi;
  }

  public sendLocationToApi(location: any) {
    return this.http.post(this._url + '/People/UpdateLocation',location);
  }

  public getNearUsers() {
    return this.http.get(this._url + '/People/Near');
  }
  public getNearestUser() {
    return this.http.get(this._url + '/People/Nearest');
  }
  public getFindableStatus() {
    return this.http.get(this._url + '/People/Findable');
  }
  public toggleFindableStatus() {
    return this.http.get(this._url + '/People/ToggleFindable');
  }
  public isConnected(targetId: number) {
    return this.http.get(this._url + `/People/${targetId}/Connected`);
  }
  public getConnected(targetId: number) {
    return this.http.get(this._url + `/People/${targetId}/Connect`);
  }
  public getNotifications() {
    return this.http.get(this._url + `/People/Notifications`);
  }
}