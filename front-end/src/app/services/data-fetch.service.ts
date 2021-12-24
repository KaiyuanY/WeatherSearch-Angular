import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  weatherUrl = "https://hw8-cs571-2021.wl.r.appspot.com/weather?";
  googleGeoCodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
  geocodingKey = "KEY_REMOVED_FOR_SECURITY";
  ipinfoUrl = "https://ipinfo.io/json?token=ab3350e7e4c394";

  constructor(private _http: HttpClient) { }
  getLocationWithAddress(address: string){
    return this._http.get(this.googleGeoCodingUrl+address+'&key='+this.geocodingKey);
  }
  getLocationWithIp(){
    return this._http.get(this.ipinfoUrl);
  }
  getWeatherData(lat:number, lon:number){
    var url = this.weatherUrl + 'lat=' + lat + '&lon=' + lon;
    return this._http.get(url);
  }
}
