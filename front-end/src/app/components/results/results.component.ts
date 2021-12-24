import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DailyWeather } from 'src/app/daily-weather';
import { Weathercode } from 'src/app/weathercode';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() data: DailyWeather[] = [];
  
  weatherCodeHash: Weathercode = new Weathercode();
  saved = false;
  atDetailPage = false;
  dataForDetail:DailyWeather = {
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
    lat: 0,
    lon:0,
    city: '',
    state: ''
  };
  lastIndexClicked = 0;

  atDailyWeather = true;
  atChart1 = false;

  chart1!: typeof Highcharts;
  chart1Options: Highcharts.Options = {
    chart: {
      type: 'arearange',
      zoomType: 'x',
      scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
      }
    },

    title: {
      text: 'Temperature Ranges (Min, Max)'
    },

    xAxis: {
      type: 'datetime',
      tickInterval: 24 * 3600 * 1000
    },

    yAxis: {
      title: {
          text: null
      }
    },
    plotOptions: {
      arearange:{
        fillColor: {
          linearGradient:{
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
              [0, '#E58A2F'],
              [1, '#389BE6']
          ]
      },
      },
    series: {
        marker: {
          enabled: true
        },
        
        opacity: 0.5
    }
  },
  colors:['#389BE6', '#E58A2F'],
    tooltip: {
      shared: true,
      valueSuffix: '°F',
      xDateFormat: '%A %b %e'
    },

    legend: {
      enabled: false
    },
  };

  constructor() { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) =>{
    //   this.data = JSON.parse(params.get('data') || '{}');
    //   this.city = params.get('city') || '';
    //   this.state = params.get('state') || '';
    // });
  }
  ngAfterViewInit(): void{
    var chart1Data:number[][] = [];
    for(var i=0; i<15; i++){
      let time = new Date(this.data[i].date).getTime();
      chart1Data.push([time, this.data[i].tempLow, this.data[i].tempHigh]);
    }
    console.log(chart1Data);
    this.chart1 = Highcharts;
    this.chart1.setOptions({
      series: [{
        type: 'arearange',
        name: 'Temperatures',
        data: chart1Data
      }]
    });
  }
  onSaveClick(){
    this.saved = true;
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var key = '';
    for ( var i = 0; i < 10; i++ ) {
        key += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    localStorage.setItem(key, JSON.stringify(this.data[0]));
  }
  onDetailClicked(index: number){
    this.dataForDetail = this.data[index];
    this.lastIndexClicked = index;
    this.atDetailPage = true;
  }
  onTabClick(tab: number){
    if(tab == 0){
      this.atDailyWeather = true;
      this.atChart1 = false;
    }
    else{
      this.atDailyWeather = false;
      this.atChart1 = true;
    }
  }
}
