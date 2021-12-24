import { Time } from "@angular/common";

export interface DailyWeather {
    date: Date;
    status: string;
    imgUrl: string;
    tempHigh: number;
    tempLow: number;
    windSpeed: number;
    tempApparent: number;
    sunrise: Date;
    sunset: Date;
    humidity: number;
    visibility: number;
    cloudCover:number;

    lat:number;
    lon:number;
    city: string;
    state: string;
}
