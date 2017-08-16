import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from '../assets/services/weather.service';
import 'rxjs/Rx';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {MusicComponent} from './music/music.component';
import {MusicService} from '../assets/services/music.service';
import { TempPipe } from '../assets/pipes/temp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MusicComponent,
    TempPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
