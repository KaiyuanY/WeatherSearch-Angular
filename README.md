# WeatherSearch-Angular
 An angular app with node.js backend in which user can search the weather condition for different places
[Google Cloud Deployment](https://hw8-cs571-2021.wl.r.appspot.com/)
## Version
- Angular 12
- Node 14

## Features Impletmented
- A form user can enter address (via google geocoding api) or auto detect location (via ipinfo) to search weather condition for specific locations. Used 2-way data binding with **ngModel** for form input.
- Submitting the form will make an **ajax** call (with Angular HttpClient) to the **node.js** backend (express.js), which will make another asynchronous call to [tomorrow.io](https://app.tomorrow.io/) API to fetch weather data.
- (nav tab 1) A general result table is displayed when ajax call finishes, with dates, weather condition, max temperature, min temperature and wind speed. 
- (nav tab 2) A [HighChart](https://www.highcharts.com/) showing temperature variation by day for the next 15 days.
- Clicking on each date in the result table will lead to a page displaying detailed weather info of that specific date, and a **google map** showing the location of the place searched for.
- User can click on the star button on the restult page and it will save the current location to user's favorite list (**LocalStorage**).
- Clicking on the trash bin button on specific entry in favorites page will remove that data from LocalStorage.