import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultsComponent } from './components/results/results.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DetailsComponent } from './components/details/details.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    ResultsComponent,
    FavoritesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    GoogleMapsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
