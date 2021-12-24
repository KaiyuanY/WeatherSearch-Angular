import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { DailyWeather } from 'src/app/daily-weather';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() data: DailyWeather= {
    date: new Date(),
    status: '',
    imgUrl: '',
    tempHigh: 0,
    tempLow: 0,
    windSpeed: 0,
    tempApparent: 0,
    sunrise: new Date(),
    sunset: new Date(),
    humidity: 0,
    visibility: 0,
    cloudCover: 0,
    lat: 34.0224,
    lon: -118.2851,
    city: '',
    state: ''
  };
  @Output() public event = new EventEmitter();

  @ViewChild('map') mapElement!: ElementRef;
  map!: google.maps.Map;
  
  public backToResultEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void{
    const mapProperties = {
      center: new google.maps.LatLng(this.data.lat, this.data.lon),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
  onBack(){
    var backToResults = true;
    this.event.emit(backToResults);
  }
}
