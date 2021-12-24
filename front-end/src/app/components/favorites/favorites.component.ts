import { Component, OnInit } from '@angular/core';
import { DailyWeather } from 'src/app/daily-weather';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor() { }
  recordFound = false;
  data: DailyWeather[] = [];
  keys: string[] = [];
  ngOnInit(): void {
    this.keys = Object.keys(localStorage);
    if(this.keys.length == 0){
      this.recordFound = false;
    }
    else{
      this.recordFound = true;
      for(var i=0; i<this.keys.length; i++){
        this.data.push(JSON.parse(localStorage.getItem(this.keys[i]) || ''));
      }
    }
    
  }
  onDeleteRow(index: number){
    this.data.splice(index, 1);
    var key = this.keys.splice(index, 1);
    localStorage.removeItem(key[0]);
  }
}
