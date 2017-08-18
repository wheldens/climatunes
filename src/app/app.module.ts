import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from '../assets/services/weather.service';
import 'rxjs/Rx';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {MusicComponent} from './music/music.component';
import {MusicService} from '../assets/services/music.service';
import {TempPipe} from '../assets/pipes/temp.pipe';
import {ForCPipe} from '../assets/pipes/temp.pipe';
import {ShortenPipe} from '../assets/pipes/shorten.pipe';

import {YoutubeComponent} from './youtube/youtube.component';
import {YoutubePlayerModule} from 'ng2-youtube-player';
import {YoutubeService} from '../assets/services/youtube.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MusicComponent,
    TempPipe,
    ForCPipe,
    ShortenPipe,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [WeatherService, MusicService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
