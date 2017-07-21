import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { WeatherService } from '../assets/services/weather.service';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { GeolocationComponent } from './geolocation/geolocation.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
