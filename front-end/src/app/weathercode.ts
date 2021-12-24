export class Weathercode {
    public static getUrl(code: number){
        switch (code){
            case 4201:{
                return "assets/img/rain_heavy.svg";
            }
            case 4001:{
                return "assets/img/rain.svg";
            }
            case 4200:{
                return "assets/img/rain_light.svg";
            }
            case 6201:{
                return "assets/img/freezing_rain_heavy.svg";
            }
            case 6001:{
                return "assets/img/freezing_rain.svg";
            }
            case 6200:{
                return "assets/img/freezing_rain_light.svg";
            }
            case 6000:{
                return "assets/img/freezing_drizzle.svg";
            }
            case 4000:{
                return "assets/img/freezing_drizzle.svg";
            }
            case 7101:{
                return "assets/img/ice_pellets_heavy.svg";
            }
            case 7000:{
                return "assets/img/ice_pellets.svg";
            }
            case 7102:{
                return "assets/img/ice_pellets_light.svg";
            }
            case 5101:{
                return "assets/img/snow_heavy.svg";
            }
            case 5000:{
                return "assets/img/snow.svg";
            }
            case 5100:{
                return "assets/img/snow_light.svg";
            }
            case 5001:{
                return "assets/img/flurries.svg";
            }
            case 8000:{
                return "assets/img/tstorm.svg";
            }
            case 2100:{
                return "assets/img/fog_light.svg";
            }
            case 2000:{
                return "assets/img/fog.svg";
            }
            case 1001:{
                return "assets/img/cloudy.svg";
            }
            case 1102:{
                return "assets/img/mostly_cloudy.svg";
            }
            case 1101:{
                return "assets/img/partly_cloudy_day.svg";
            }
            case 1100:{
                return "assets/img/mostly_clear_day.svg";
            }
            case 1000:{
                return "assets/img/clear_day.svg";
            }
            default:{
                return '';
            }
        }
    }
    public static getStatus(code: number){
        switch (code){
            case 4201:{
                return "Heavey Rain";
            }
            case 4001:{
                return "Rain";
            }
            case 4200:{
                return "Light Rain";
            }
            case 6201:{
                return "Heavey Freezing Rain";
            }
            case 6001:{
                return "Freezing Rain";
            }
            case 6200:{
                return "Light Freezing Rain";
            }
            case 6000:{
                return "Freezing Drizzle";
            }
            case 4000:{
                return "Drizzle";
            }
            case 7101:{
                return "Heavey Ice Pellets";
            }
            case 7000:{
                return "Ice Pellets";
            }
            case 7102:{
                return "Light Ice Pellets";
            }
            case 5101:{
                return "Heavey Snow";
            }
            case 5000:{
                return "Snow";
            }
            case 5100:{
                return "Light Snow";
            }
            case 5001:{
                return "Flurries";
            }
            case 8000:{
                return "Thunderstorm";
            }
            case 2100:{
                return "Light Fog";
            }
            case 2000:{
                return "Fog";
            }
            case 1001:{
                return "Cloudy";
            }
            case 1102:{
                return "Mostly Cloudy";
            }
            case 1101:{
                return "Partly Cloudy";
            }
            case 1100:{
                return "Mostly Clear";
            }
            case 1000:{
                return "Clear";
            }
            default:{
                return '';
            }
        }
    }
}