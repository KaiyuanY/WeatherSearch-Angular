import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/FormModel';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from 'src/app/services/data-fetch.service';
import { Observable, throwError } from 'rxjs';
import { DailyWeather } from 'src/app/daily-weather';
import { Weathercode } from 'src/app/weathercode';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
            'District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
            'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota',
              'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
            'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
              'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington',
              'West Virginia','Wisconsin','Wyoming'];
  formModel: FormModel = {
    street: '',
    city: '',
    state: ''
  };
  hasError = false;
  showProgressBar = false;
  autoDetect = false;
  dataFetched = false;
  isAtFavorites = false;
  dailyWeatherData: DailyWeather[] = [];
  city = '';
  state = '';
  constructor(private _dataFetch: DataFetchService) { }

  ngOnInit(): void {
  }
  onAutoDetect(){
    if(!this.autoDetect){
      this.autoDetect = true;
      this.formModel.street = '';
      this.formModel.city = '';
      this.formModel.state = '';
    }
    else{
      this.autoDetect = false;
    }
  }
  onSubmit(){
    this.showProgressBar = true;
    if(!this.autoDetect){
      let address = this.formModel.street+','+this.formModel.city+','+this.formModel.state;
      this._dataFetch.getLocationWithAddress(address).subscribe(
        geoRsp => {
          var geo:any = {};
          geo = geoRsp;
          var lat = geo['results'][0]['geometry']['location']['lat'];
          var lon = geo['results'][0]['geometry']['location']['lng'];
          
          this.city = geo['results'][0]['address_components'][0]['long_name'];
          this.state = geo['results'][0]['address_components'][3]['long_name'];
          this._dataFetch.getWeatherData(lat, lon).subscribe(
            weatherData =>{
              var weather:any = {};
              weather = weatherData;
              var daily = weather[1];
              var hourly = weather[2];

              daily = daily['intervals'];
              for(var i=0; i<15; i++){
                let dateVal = new Date(daily[i]['startTime']);
                let min = daily[i]['values']['temperatureMin'];
                let high = daily[i]['values']['temperatureMax'];
                let ws = daily[i]['values']['windSpeed'];
                let tempa = daily[i]['values']['temperatureApparent'];
                let wc = daily[i]['values']['weatherCode'];
                let humid = daily[i]['values']['humidity'];
                let cc = daily[i]['values']['cloudCover'];
                let visi = daily[i]['values']['visibility'];
                let sr = new Date(daily[i]['values']['sunriseTime']);
                let ss = new Date(daily[i]['values']['sunsetTime']);
                let url = Weathercode.getUrl(wc) || '';
                let stat = Weathercode.getStatus(wc) || '';
                let dataEntry: DailyWeather = {
                  date: dateVal,
                  status: stat,
                  imgUrl: url,
                  tempHigh: high,
                  tempLow: min,
                  windSpeed: ws,
                  tempApparent: tempa,
                  sunrise: sr,
                  sunset: ss,
                  humidity: humid,
                  visibility: visi,
                  cloudCover: cc,
                  city : this.city,
                  state : this.state,
                  lat : lat,
                  lon: lon
                };
                //console.log(JSON.stringify(dataEntry));
                this.dailyWeatherData.push(dataEntry);
              }
              if(this.dailyWeatherData.length == 0){
                this.hasError = true;
              }
              else{
                this.dataFetched = true;
              }
              this.showProgressBar = false;
            });
        });
      
    }
    else{
      this._dataFetch.getLocationWithIp().subscribe(
        geoRsp => {
          var geo:any = {};
          geo = geoRsp;
          var loc = geo['loc'].split(',');
          var lat = loc[0];
          var lon = loc[1];
          this.city = geo['city']
          this.state = geo['region'];
          
          this._dataFetch.getWeatherData(lat, lon).subscribe(
            weatherData =>{
              var weather:any = {};
              weather = weatherData;
              var daily = weather[1];
              var hourly = weather[2];

              daily = daily['intervals'];
              for(var i=0; i<15; i++){
                let dateVal = new Date(daily[i]['startTime']);
                let min = daily[i]['values']['temperatureMin'];
                let high = daily[i]['values']['temperatureMax'];
                let ws = daily[i]['values']['windSpeed'];
                let tempa = daily[i]['values']['temperatureApparent'];
                let wc = daily[i]['values']['weatherCode'];
                let humid = daily[i]['values']['humidity'];
                let cc = daily[i]['values']['cloudCover'];
                let visi = daily[i]['values']['visibility'];
                let sr = new Date(daily[i]['values']['sunriseTime']);
                let ss = new Date(daily[i]['values']['sunsetTime']);
                let url = Weathercode.getUrl(wc) || '';
                let stat = Weathercode.getStatus(wc) || '';
                let dataEntry: DailyWeather = {
                  date: dateVal,
                  status: stat,
                  imgUrl: url,
                  tempHigh: high,
                  tempLow: min,
                  windSpeed: ws,
                  tempApparent: tempa,
                  sunrise: sr,
                  sunset: ss,
                  humidity: humid,
                  visibility: visi,
                  cloudCover: cc,
                  city : this.city,
                  state : this.state,
                  lat : lat,
                  lon: lon
                };
                //console.log(JSON.stringify(dataEntry));
                this.dailyWeatherData.push(dataEntry);
              }
              if(this.dailyWeatherData.length == 0){
                this.hasError = true;
              }
              else{
                this.dataFetched = true;
              }
              this.showProgressBar = false;
            });
        });
    }
    
  }
  onReset(){
    this.autoDetect = false;
    this.formModel.street = '';
    this.formModel.city = '';
    this.formModel.state = '';
    this.dataFetched = false;
    this.isAtFavorites = false;
    this.dailyWeatherData = [];
    this.city = '';
    this.state = '';
    this.hasError = false;
  }
  onResultTabClicked(){
    this.isAtFavorites = false;
  }
  onFavTabClicked(){
    this.isAtFavorites = true;
  }
}
